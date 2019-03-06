const path = require("path");
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const auth = require("./services/auth");
//const io = require("socket.io");
//const dotenv = require("dotenv");
const query = require("querystring");
//const cors = require("cors");

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  const routes = express.Router()

app.listen(port);

app.use("/", routes);

routes.get("/signup", async() => {
console.log("signup pages");
});

routes.get("/login", async() => {
    console.log("login page");
    });

routes.get("/me", async() => {
    console.log("ma page");
        });
