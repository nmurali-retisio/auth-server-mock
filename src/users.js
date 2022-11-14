const users = {
    'superadminABUS@allenbrothers.com': {
        userName: "superadminABUS@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngA",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Joe",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_SUPER_ADMIN",
            "orgId": "org1",
            "siteId": "site,site2,site3"
        }
    },
    'userABUS@allenbrothers.com': {
        userName: "userABUS@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngB",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_USER",
            "orgId": "org1",
            "siteId": "site1"
        }
    },
    'superadminABCA@allenbrothers.com': {
        userName: "superadminABCA@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngC",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_SUPER_ADMIN",
            "orgId": "org1",
            "siteId": "site2"
        }
    },
    'userCA@allenbrothers.com': {
        userName: "userCA@allenbrothers.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngD",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "John",
            "ln": "Doe",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_USER",
            "orgId": "org1",
            "siteId": "site2"
        }
    },
    'superadminMKUS@michaelkors.com': {
        userName: "superadminMKUS@michaelkors.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngE",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Super",
            "ln": "Admin",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_SUPER_ADMIN",
            "orgId": "org2",
            "siteId": "site1"
        }
    },
    'userMKUS@michaelkors.com': {
        userName: "userMKUS@michaelkors.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngF",
        claims: {
            "type": "in",
            "cg": null,
            "fn": "Super",
            "ln": "Admin",
            "chnls": "dev-www.us.com",
            "per": null,
            "roles": "ANALYTICS_USER",
            "orgId": "org2",
            "siteId": "site1"
        }
    },
    'Error@michaelkors.com': {
        userName: "Error@michaelkors.com",
        password: "Login@1234",
        id: "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngG",
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
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngA": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngA",
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
        "orgId": "org1",
        "roles": [
            "ANALYTICS_SUPER_ADMIN"
        ],
        "siteId": [
            "site1",
            "site2",
            "site3"
        ],
        "active": true
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngB": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngB",
        "profile": {
            "firstName": "User",
            "middleName": "Testing",
            "lastName": "Testing",
            "userName": "Testing user",
            "shortName": "SuperAdmin US",
            "email": "userABUS@allenbrothers.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "org1",
        "roles": [
            "ANALYTICS_USER"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngC": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngC",
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
        "orgId": "org1",
        "roles": [
            "ANALYTICS_SUPER_ADMIN"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngD": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngD",
        "profile": {
            "firstName": "User",
            "middleName": "CA",
            "lastName": "Testing",
            "userName": "Mock User CA",
            "shortName": "UserUS",
            "email": "userABCA@allenbrothers.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "org1",
        "roles": [
            "ANALYTICS_USER"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngE": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngE",
        "profile": {
            "firstName": "Super Admin",
            "middleName": "US",
            "lastName": "Testing",
            "userName": "Mock User US",
            "shortName": "UserUS",
            "email": "superadminMKUS@michaelkors.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "org2",
        "roles": [
            "ANALYTICS_SUPER_ADMIN"
        ],
        "channels": [
            "dev-www.us.com"
        ],
        "active": true
    },
    "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngF": {
        "businessUserId": "kZdK5mvhBdikZOZB72__2MbBIJ1-I5tJSN8dN5HM2pU2KOlRS92s46oWrAWtCngF",
        "profile": {
            "firstName": "User",
            "middleName": "CA",
            "lastName": "Testing",
            "userName": "Mock User US",
            "shortName": "UserUS",
            "email": "userMKUS@michaelkors.com",
            "phone": "4949494949"
        },
        "createdAt": "2022-06-16 16:39:11",
        "modifiedAt": "2022-06-16 16:48:53",
        "designation": "Testing",
        "orgId": "org2",
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