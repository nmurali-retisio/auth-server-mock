# Auth Server for tests
## About
Stand-in auth server for development purposes.
This Express app can be use in place of connecting the framework to a production Auth Server.

## Installation
`npm install` will install all dependencies.
`npm start` will run the app on port 8080.

## Usage
All the allowed users are contained in the `src/users` file. <br />
Username, role and password can be modified there. <br />
Port number and JWT secret can be changed in .env file at project root. 

## API Reference
### /auth - POST
Example request:
```javascript
{
	"email": "role1@retisio.com",
	"password": "role1"
}
```
Example  response:
```javascript
{
    "token": "eyJhbGciOiJIUzI1Ni..."
}
```
### /verify - GET
| Parameter | Description |
| --- | --- |
| Authorization |  [Auth Token](https://auth0.com/docs/tokens/json-web-tokens) |

Example request:
```bash
# Request with http method GET
curl \
 -H "Authorization: EXAMPLE-API-TOKEN" \
 -G \
 http://localhost:8080/verify
 ```
 
Example  response:
```javascript
{
    "username": "role1",
    "email": "role1@retisio.com",
    "role": "ROLE1",
    "iat": 1620905085,
    "exp": 1622633085
}
```


{
  "sub": "a1pkSzVtdmhCZGlrWk9aQjcyX18yTWJCSUoxLUk1dEpTTjhkTjVITTJwVTJLT2xSUzkyczQ2b1dyQVd0Q25nSg==",
  "claims": {
    "type": "in",
    "cg": null,
    "fn": "analytics-user1",
    "ln": "Analytics-User1",
    "chnls": "dev-www.us.com",
    "per": null,
    "roles": "ANALYTICS_MANAGER"
  },
  "iss": "AuthenticationProfile",
  "exp": 1658249653,
  "iat": 1658220853
}