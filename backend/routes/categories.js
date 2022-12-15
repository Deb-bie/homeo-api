const express = require("express")
const router = express.Router();

const {createCategory,updateCategory, deleteCategory, getOneCategory, getAllCategories} = require("../controllers/category.js")


// CREATE
router.post("/", createCategory)

// UPDATE
router.put("/:id", updateCategory)

// DELETE
router.delete("/:id", deleteCategory)

// GET ALL
router.get("/", getAllCategories)

// GET ONE
router.get("/:id", getOneCategory)


// GET BEDS
router.get("/category", getAllCategories)

// GET CHAIRS


// GET COUCHES


// GET TABLES



// GET DININGSETS



// GET LIGHTS


// AVAILABILITY
router.get("/availability", getAllCategories)



module.exports = router;