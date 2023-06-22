// YOUR CODE HERE
const express = require('express')
const app = express()

//middleware
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());

//variable to store the router
const storeRoute = require("./routes/storeRouter");

//Routes
app.use("/", storeRoute);


module.exports = app