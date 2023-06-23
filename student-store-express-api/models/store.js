
const express = require('express');
const products = require('../data/db.json');

//Get all products
const getAllProducts = () => {

  return products;
};

module.exports = {getAllProducts}