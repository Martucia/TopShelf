const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        contact: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        shipping: {
            country: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            apartment: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            cost: {
                type: Number,
                required: true
            }
        },
        sum: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0
        },
        total_sum: {
            type: Number,
            required: true
        },
        notes: {
            type: String
        },
        products: [{
            product: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number
            },
        }],
        phone: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: "New"
        },
        coupon: {
            type: mongoose.Types.ObjectId,
            ref: "Coupon"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);