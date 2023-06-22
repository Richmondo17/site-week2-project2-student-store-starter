const express = require("express");
const router = express.Router();

const db = require('../data/db.json')



//Home screen
router.get("/", (req, res) =>{
    res.send(db);
})


//Get all the products
router.get("/store", (req, res) =>{
    const products = storeModel.getAllProducts();
    response.json(products)
})


// router.get("/store/:id", (req, res) => {
//     const products = 
//     .find(product.id === id)
// })

module.exports = router;
