const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        authorId: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        author: {
            type: String,
            required: true,
        },
        text: {
            type: String
        },
        mark: {
            type: Number,
            required: true,
        },
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Review", reviewSchema);