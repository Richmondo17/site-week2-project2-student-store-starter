// YOUR CODE HERE
const express = require('express')
const app = express()
const storeRouter = require("./routes/storeRouter.js")

//middleware
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json())

//Home Screen
app.use("/", storeRouter)

//   res.send({products});
  // res.send(products);


//All Products
// app.get("/store", (req, res) =>{
//   res.send({products: db.products});
// })

//variable to store the router
// const storeRoute = require("./routes/storeRouter");

//Routes
// app.use("/", storeRoute);


module.exports = app