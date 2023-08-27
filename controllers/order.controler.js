const Order = require('../models/Order');
const User = require("../models/User");
const Product = require('../models/Product');
const Coupon = require('../models/Product');
const mongoose = require("mongoose");

const create = async (req, res, next) => {
    try {
        const { total_sum, country, city, street, apartment = "", name, lastname, notes, cart, phone, email, couponId = null, shippingCost } = req.body;

        let sum = 0;
        let discount = 0;
        let products = [];

        await Promise.all(cart.map(async product => {
            let prod = await Product.findOne({ _id: product.product._id });

            discount += (prod.discount !== 0 ? prod.price - prod.discount : 0) * product.quantity;

            sum += prod.price * product.quantity;

            products.push({
                product: new mongoose.Types.ObjectId(product.product._id),
                quantity: product.quantity,
                price: prod.discount !== 0 ? prod.discount : prod.price
            });
        }));

        const coupon = await Coupon.findOne({ _id: couponId });

        let couponDiscount = null;

        if (coupon) {
            if (coupon.discount.type == "%") {
                couponDiscount = (totalProductsSum * (coupon.discount.number / 100));
            } else if (coupon.discount.type == "USD") {
                couponDiscount = coupon.discount.number;
            }
        }

        const order = new Order({
            contact: new mongoose.Types.ObjectId(req.userId),
            shipping: {
                country,
                city,
                street,
                apartment,
                name,
                lastname,
                cost: shippingCost
            },
            sum,
            notes,
            products,
            phone,
            email,
            coupon: couponId ? new mongoose.Types.ObjectId(couponId) : null,
            total_sum,
            discount
        });

        const result = await order.save();

        const orderOut = await Order.findOne({ _id: result }).populate({
            path: 'products.product',
            select: '_id name discount price images',
        }).populate({
            path: 'coupon',
            select: '_id discount',
        });

        await User.findOneAndUpdate({ _id: req.userId }, { cart: [] })

        return res.status(200).json(orderOut);

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}



module.exports = { create };