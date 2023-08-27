const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const couponSchema = new Schema(
    {
        expiration: {
            type: Date
        },
        text: {
            type: String,
            required: true,
        },
        residue: {
            type: Number
        },
        discount: {
            number: { type: Number },
            type: { type: String }
        },
        sum: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Coupon", couponSchema);