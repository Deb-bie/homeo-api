const mongoose = required("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        image:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        inStock: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            default: 0
        },
        additionalInformation: {
            type: String
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", ProductSchema)