# urlshortener

`shortened your url to share it to the world`

### Prerequistics

- git
- npm
- NodeJS / Express
- Docker
- MongoDB Atlas

Checkout config/exmaple.env for template of config file on Google OAuth2 and MongoDB Atlas setup

### Install dependencies

```
$ cd urlshortener/
$ npm install
```

### Build and Run Docker

```
$ docker build . -t name-the-container-anything
$ docker run -p 49160:8080 -d <your username>/node-web-app
```

### Usage

#### GET Methods

- /dashboard - returns all the urls for current logged in user [http://localhost:8080/dashboard](http://localhost:8080/dashboard)
- /auth/google - redirects user to the google login page for authentication [http://localhost:8080/auth/google](http://localhost:8080/auth/google)
- /auth/google/callback - user is redirected here once login is successfull with user data [http://localhost:8080/auth/google/callback](http://localhost:8080/auth/google/callback)
- /auth/logout - user is logged out [http://localhost:8080/auth/logout](http://localhost:8080/auth/logout)
- /api/:shortId - will redirect to the url corresponded with that shortid [http://localhost:8080/api/aCmPeQEzISf6vAAdanW97](http://localhost:8080/api/aCmPeQEzISf6vAAdanW97)

#### POST Methods

- /api/createUrl - takes json input to create shortened url and input in database [http://localhost:8080/api/createUrl](http://localhost:8080/api/createUrl)

```json
{
  "user": "userID", // this is automatically done with current user info
  "url": "www.google.com"
}
```

#### DELETE Methods

- /api/:shortId -deletes the short url with corresponding shortID from database [http://localhost:8080/api/aCmPeQEzISf6vAAdanW97](http://localhost:8080/api/aCmPeQEzISf6vAAdanW97)

### Tools

- Visual Studio Code
- Postman
- Github
- iTerm

### Useful Resources

- https://mongoosejs.com/docs/api.html
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://expressjs.com/en/guide/routing.html
