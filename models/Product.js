const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },

        description: {
            type: String,
            required: true
        },

        reviews: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Review"
            }
        ],

        discount: {
            type: Number,
            default: 0
        },

        remainder: {
            type: Number
        },

        available: {
            type: Boolean,
            default: true
        },

        composition: {
            type: Array
        },

        price: {
            type: Number,
            required: true
        },

        images: [{
            type: Array
        }],

        sales: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Product", productSchema);