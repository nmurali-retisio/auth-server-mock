const users = {
    'superadminABUS@allenbrothers.com': {
        userName: "superadminABUS@allenbrothers.com",
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
    'userABUS@allenbrothers.com': {
        userName: "userABUS@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngX",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_USER",
            "orgId": "1001",
            "siteId": "US"
        }
    },
    'superadminABCA@allenbrothers.com': {
        userName: "superadminABCA@allenbrothers.com",
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
    'userCA@allenbrothers.com': {
        userName: "userCA@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngX",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_USER",
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
            "firstName": "Super Admin",
            "middleName": "Testing",
            "lastName": "Testing",
            "userName": "Super Admin Testing user",
            "shortName": "SuperAdmin US",
            "email": "superadminABUS@allenbrothers.com",
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
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngK": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngK",
        "profile": {
            "firstName": "Super Admin",
            "middleName": "Testing",
            "lastName": "Testing",
            "userName": "Super Admin Testing user",
            "shortName": "SuperAdmin CA",
            "email": "superadminABCA@allenbrothers.com",
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
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngX": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngX",
        "profile": {
            "firstName": "User",
            "middleName": "CA",
            "lastName": "Testing",
            "userName": "Mock User CA",
            "shortName": "UserUS",
            "email": "userABUS@allenbrothers.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "1001",
        "roles": [
            "ANALYTICS_USER"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    },
}

module.exports = { users, userInfo }