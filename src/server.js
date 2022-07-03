var express = require('express');
const cors = require('cors');
const users = require('./users');
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

const roles = [
    {
        "id": "ANALYTICS_MANAGER",
        "name": "Analytics Manager",
        "description": "Analytics Manager",
        "permissionIds": [
            "domain.analytics.read.per-g",
            "domain.analytics.write.per-g",
            "domain.rbac.read.per-g",
            "domain.analytics.delete.per-g"
        ],
        "createdAt": "2022-06-16T16:19:20.209",
        "lastModifiedAt": "2022-06-16T16:19:20.209"
    }
]

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
            username: user.username,
            email: user.email,
            role: user.role,
            analyticsClaims: user.analyticsClaims
        }
        const token = jwt.sign(tokenBody, secret, {
            expiresIn: '1d',
        });
        res.send({
            "id": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngJ",
            "status": 200,
            "statusMessage": "SignIn Successful",
            "token": token
        })
    } else {
        res.status(403).send({
            error: "Incorrect password"
        });
    }
})

app.get('/api/account/api/v1/internal-users/:id', (req, res) => {
    res.send({
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngJ",
        "profile": {
            "firstName": "analytics-user1",
            "middleName": "Testing",
            "lastName": "Analytics-User1",
            "userName": "ARC Testing  Analytics-User1",
            "shortName": "aA",
            "email": "analytics-user1@aienterprise.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "roles": [
            "ANALYTICS_MANAGER"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    })
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
            "totalCount": 1,
            "limit": 100,
            "offset": 1
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