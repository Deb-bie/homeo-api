const Product = require("../models/Product.js")
const Category = require("../models/Category.js")


// CREATE A PRODUCT
const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        next(error)
    }
}


// UPDATE A PRODUCT
const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})        
        res.status(200).json(updatedProduct)
    } catch (error) {
        next(error)
    }
}


// DELETE A PRODUCT
const deleteProduct = async (req, res, next) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(`This product has been deleted`)
    } catch (error) {
        next(error)
    }
}


// GET ALL PRODUCTS
const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
    } catch (error) {
        next(error)
    }
}


// GET A PRODUCT
const getOneProduct = async (req, res, next) => {
    try {
        const oneProduct = await Product.findById(req.params.id)
        res.status(200).json(oneProduct)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getOneProduct
}
