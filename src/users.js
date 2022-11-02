const users = {
    'Joe@allenbrothers.com': {
        userName: "Joe@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngJ",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Joe",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_SUPER_ADMIN",
            "orgId": "1001",
            "siteId": "US"
        }
    },
    'John@allenbrothers.com': {
        userName: "John@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngK",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_SUPER_ADMIN",
            "orgId": "1001",
            "siteId": "CA"
        }
    },
    'Jeff@michaelkors.com': {
        userName: "Jeff@michaelkors.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngL",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Jeff",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_MANAGER, ANALYTICS_MANAGER2",
            "orgId": "1002",
            "siteId": "US"
        }
    },
    'Error@michaelkors.com': {
        userName: "Error@michaelkors.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngA",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Error",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "TEST"
        }
    }
}

const userInfo = {
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngJ": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngJ",
        "profile": {
            "firstName": "Joe",
            "middleName": "Testing",
            "lastName": "User",
            "userName": "Joe Testing User",
            "shortName": "JoeAB",
            "email": "Joe@allenbrothers.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "1001",
        "roles": [
            "ANALYTICS_SUPER_ADMIN"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    }
}

module.exports = { users, userInfo }