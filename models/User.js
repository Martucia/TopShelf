const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    cart: [
        {
            product: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }
    ],

    point: {
        type: Number,
        default: 0
    },

    usedСoupons: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Coupon"
        }
    ],

    phone: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema);