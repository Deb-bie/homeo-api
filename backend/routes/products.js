const express = require("express");
const router = express.Router();

const {createProduct,updateProduct, deleteProduct, getOneProduct, getAllProducts} = require("../controllers/product.js")


// CREATE
router.post("/", createProduct)

// UPDATE
router.put("/:id", updateProduct)

// DELETE
router.delete("/:id", deleteProduct)

// GET ALL
router.get("/", getAllProducts)

// GET ONE
router.get("/:id", getOneProduct)

module.exports = router;
