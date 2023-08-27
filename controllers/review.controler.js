const Review = require('../models/Review');
const User = require("../models/User");
const Product = require('../models/Product');
const mongoose = require("mongoose");

const get = async (req, res, next) => {
    try {
        const reviews = await Review.find({ $expr: { $gt: [{ $strLenCP: '$text' }, 5] } }).limit(15);

        return res.status(200).json(reviews);
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const create = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { text, mark } = req.body;

        const product = await Product.findOne({ _id: id })
        const user = await User.findOne({ _id: req.userId }, { name: 1 })

        if (!product) {
            return res.status(500).json({ message: 'Such a product does not exist' })
        }

        const review = new Review({
            authorId: new mongoose.Types.ObjectId(req.userId),
            author: user.name,
            text: text,
            mark: Number(mark),
            productId: product._id
        });

        await review.save();

        product.reviews.addToSet(review);

        await product.save();

        return res.status(200).json(review)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const edit = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { text, mark } = req.body;

        const review = await Review.findOneAndUpdate({ _id: id }, { text, mark }, {
            new: true
        });

        return res.status(200).json(review)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}


module.exports = { get, create, edit };