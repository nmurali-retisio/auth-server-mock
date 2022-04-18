var express = require('express');
const cors = require('cors');
const users = require('./users');
require('dotenv').config()

var jwt = require('jsonwebtoken');

const port = process.env.PORT;
const secret = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth", (req, res) => {
    const user = users[req.body.email];
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
            "token": token
        })
    } else {
        res.status(403).send({
            error: "Incorrect password"
        });
    }
})

app.get("/verify", (req, res) => {
    const token = req.header('Authorization');
    jwt.verify(token, secret, function (err, decoded) {
        if (err) {
            console.log(err);
        }
        res.send(decoded);
    });
})

app.listen(port, function () {
    console.log("Listening on port " + port);
});