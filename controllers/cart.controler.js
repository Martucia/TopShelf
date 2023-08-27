const User = require("../models/User");
const Product = require('../models/Product');

const add = async (req, res, next) => {
    try {
        const { productId, quantity = 1, additional = [] } = req.body

        let user = await User.findOne({ _id: req.userId }).populate({
            path: 'cart.product',
            select: '_id name discount remainder available price images ',
        });

        if (!user) {
            return res.status(400).json({ message: 'No such user exists' })
        }

        const existingCartItem = user.cart.find(
            (item) => item.product._id.toString() === productId
        );

        if (existingCartItem) {
            existingCartItem.quantity += quantity;
        } else {
            user.cart.push({ product: productId, quantity });
        }

        await user.save();

        if (!existingCartItem) {
            user = await User.findOne({ _id: req.userId }, { cart: 1 }).populate({
                path: 'cart.product',
                select: '_id name discount remainder available price images ',
            });
        }

        res.status(200).json(user.cart);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const remove = async (req, res, next) => {
    try {
        const productId = req.params.id;

        let user = await User.findOne({ _id: req.userId }).populate({
            path: 'cart.product',
            select: '_id',
        });

        if (!user) {
            return res.status(400).json({ message: 'No such user exists' })
        }

        user.cart = user.cart.filter(product => product.product._id.toString() !== productId);

        await user.save();

        res.status(200).json(productId);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const reduce = async (req, res, next) => {
    try {
        const { productId, quantity = 1 } = req.body

        let user = await User.findOne({ _id: req.userId }).populate({
            path: 'cart.product',
            select: '_id name discount remainder available price images ',
        });

        if (!user) {
            return res.status(400).json({ message: 'No such user exists' })
        }

        const existingCartItem = user.cart.find(
            (item) => item.product._id.toString() === productId
        );

        if (existingCartItem) {
            existingCartItem.quantity -= quantity;
        } else {
            return res.status(400).json({ message: 'No such product exists' })
        }

        await user.save();

        res.status(200).json({ "message": "succes" });

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

module.exports = { add, remove, reduce };