var express = require('express');
const cors = require('cors');
const { users, userInfo } = require('./users');
const roles = require('./roles');
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'role-group',
    brokers: ['localhost:9092'],
})

require('dotenv').config()

const port = process.env.PORT;
const secret = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());

const jwt = require('jsonwebtoken');

const producer = kafka.producer()

app.post("/api/account/api/v1/internal-users/sign-in", (req, res) => {
    const user = users[req.body.userName];
    if (user === undefined) {
        res.status(403).send({
            error: "User not found"
        });
        return;
    }
    if (user.password === req.body.password) {
        const tokenBody = {
            "sub": "a1pkSzVtdmhCZGlrWk9aQjcyX18yTWJCSUoxLUk1dEpTTjhkTjVITTJwVTJLT2xSUzkyczQ2b1dyQVd0Q25nSg==",
            "claims": user.claims,
            "iss": "AuthenticationProfile",
        }
        console.log("Token Body: ", tokenBody)
        const token = jwt.sign(tokenBody, secret, {
            expiresIn: '1d',
        });
        res.send({
            "id": user.id,
            "status": 200,
            "statusMessage": "SignIn Successful",
            "token": token
        })
    } else {
        res.status(400).send({
            "status": 400,
            "errors": [
                {
                    "code": "ERR_ACC_03",
                    "message": "Invalid credentials"
                }
            ]
        });
    }
})

app.get('/api/account/api/v1/internal-users/:id', (req, res) => {
    res.send(userInfo[req.params.id])
})

app.get("/verify", (req, res) => {
    console.log("Verify request incoming")
    console.log("Request Headers ", req.headers)
    const token = req.header('authorization');
    jwt.verify(token.split(' ')[1], secret, function (err, decoded) {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        console.log("decoded: ", decoded)
        res.setHeader('x-role-ids', decoded.role)
        res.send(decoded);
    });
})

app.get('/api/rbac/api/v1/roles', (req, res) => {
    res.send({
        "pagination": {
            "totalCount": roles.length,
            "limit": 100,
            "offset": 0
        },
        "roles": roles
    })
})

app.get('/rbac/addRole', async (req, res) => {
    const randomNumber = new Date().getMilliseconds()
    const roleId = `ANALYTICS_MANAGER_${randomNumber}`;
    const roleName = `Analytics Manager ${randomNumber}`;
    roles.push({
        "id": roleId,
        "name": roleName,
        "description": "Analytics Manager",
        "permissionIds": [
            "domain.analytics.read.per-g",
            "domain.analytics.write.per-g",
            "domain.rbac.read.per-g",
            "domain.analytics.delete.per-g"
        ],
        "createdAt": "2022-06-16T16:19:20.209",
        "lastModifiedAt": "2022-06-16T16:19:20.209"
    })
    await producer.connect();
    await producer.send({
        topic: 'role-events',
        messages: [{
            value: JSON.stringify({
                "type": "role-created",
                "role": {
                    "id": roleId,
                    "name": roleName,
                    "description": "description",
                    "permissionIds": ["GetProduct:write:Domain:Content"],
                    "createdAt": "2022-04-18T13:39:39.096",
                    "lastModifiedAt": "2022-05-07T07:46:09.561"
                }
            })
        }]
    });
    await producer.disconnect();
    res.send(roles)
})

app.delete('/rbac/remove/:roleId', async (req, res) => {
    await producer.connect();
    await producer.send({
        topic: 'role-events',
        messages: [{
            value: JSON.stringify({
                "type": "role-deleted",
                "id": req.params.roleId
            })
        }]
    });
    await producer.disconnect();
    res.send(roles)
})

// publish updates on users via kafka
// replace all role related functionality with role from header

app.listen(port, function () {
    console.log("Listening on port " + port);
});