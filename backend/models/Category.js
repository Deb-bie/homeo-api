const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        categoryName : {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        products: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Category", CategorySchema)