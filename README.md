# memories-app

Clone repository

Install nodemon `npm i nodemon -g`

On the server side:

+ Install dotenv `npm i dotenv`

+ Create a .env file and add **JWTSECRET** and **CONNECTION_URL** (MongoDB connection url).


Inside client folder, run `npm start` to start react server.

Inside server folder, run `npm start` to start node server with nodemon.


Server runs on **localhost:5000**. In case of hosting the app online or if the server runs on any other port; 
goto **client/src/api/api.js** and change the **baseURL**.
