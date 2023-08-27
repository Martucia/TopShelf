const Coupon = require('../models/Coupon')
const Order = require('../models/Order')
const mongoose = require("mongoose");

const create = async (req, res, next) => {
    try {


        const check = await Coupon.findOne({ text: req.body.text })

        if (check) {
            return res.status(400).json({ message: 'A coupon with this text already exists' })
        }

        const coupon = new Coupon({
            ...req.body, discount: {
                number: req.body.discount,
                type: req.body.type
            }
        });

        await coupon.save();

        return res.status(201).json(coupon);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const get = async (req, res, next) => {
    try {
        const text = req.params.text;

        const coupon = await Coupon.findOne({ text });

        if (!coupon) {
            return res.status(400).json({ message: 'Coupon is not found' })
        }

        const orders = await Order.find({ contact: new mongoose.Types.ObjectId(req.userId), coupon: new mongoose.Types.ObjectId(coupon._id) });

        if (orders.length > 0) {
            return res.status(400).json({ message: 'The coupon has already been used' });
        }

        const currentDateTime = new Date();

        if (currentDateTime > coupon.expiration) {
            return res.status(400).json({ message: 'The coupon has expired' })
        }

        return res.status(201).json(coupon);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const getAll = async (req, res, next) => {
    try {
        const coupons = await Coupon.find({});

        return res.status(201).json(coupons);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

module.exports = { create, get, getAll };