const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const config = require('config')

const registration = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            let errorsObj = {};

            errors.array().forEach(error => errorsObj[error.path] = error.msg)

            return res.status(400).json({
                errors: errorsObj,
                message: 'Incorrect data'
            });
        }

        const { name, email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'This user already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({ name, email, password: hashedPassword })

        await user.save();

        const token = jwt.sign({ userId: user._id },
            process.env.jwtSecret, { expiresIn: '1h' }
        )

        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                cart: user.cart,
                point: user.point
            },
            isAdmin: user.isAdmin
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Incorrect data'
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email }).populate({
            path: 'cart.product',
            select: '_id name discount remainder available price images ',
        });

        if (!user) {
            return res.status(400).json({ message: 'User is not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect data' })
        }

        const token = jwt.sign({ userId: user.id },
            process.env.jwtSecret, { expiresIn: '1h' }
        )

        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                cart: user.cart,
                point: user.point
            },
            isAdmin: user.isAdmin
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const auth = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userId }).populate({
            path: 'cart.product',
            select: '_id name discount remainder available price images ',
        });

        const token = jwt.sign({ userId: user._id }, process.env.jwtSecret, { expiresIn: "24h" })

        return res.status(200).json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                cart: user.cart,
                point: user.point
            },
            isAdmin: user.isAdmin
        })
    } catch (e) {
        console.log(e)
        return res.send({ message: "Server error" })
    }
}



module.exports = { registration, login, auth };