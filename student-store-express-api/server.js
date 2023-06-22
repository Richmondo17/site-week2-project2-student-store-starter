const express = require("express");
const cors = require("cors");
const app = express()

const db = require('./data/db.json')
// const app = require("./app")

let products = [...db.products]

const port = process.env.PORT || 3001

app.use(cors());

//Home Screen
app.get("/", (req, res) =>{
  res.send({products});
  // res.send(products);
})

//All Products
app.get("/store", (req, res) =>{
  res.send({products: db.products});
})

//Start the server
app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})
