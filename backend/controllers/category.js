const {Category} = require("../models/Category.js")

// CREATE
const createCategory = async(req, res, next) => {
    const newCategory = new Category(req.body)
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (error) {
        next(error)
    }
}

// UPDATE
const updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true}
        )
        res.status(200).json(updatedCategory)
    } catch (error) {
        next(error)
    }
}

// DELETE
const deleteCategory = async (rew, res, next) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json(`Deleted`)
    } catch (error) {
        next(error)
    }
}


// GET ALL
const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.find()
        res.status(200).json(allCategories)
    } catch (error) {
        next(error)
    }
}


// GET ONE

const getOneCategory = async (req, res, next) => {
    try {
        const oneCategory = await Category.findById(req.params.id)
        res.status(200).json(oneCategory)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getOneCategory
}