const express = require("express");
const { registration, login, auth } = require("../controllers/user.controler");
const { add, remove, reduce } = require("../controllers/cart.controler");
const { check } = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware')
const userRouter = express.Router();


userRouter.post(
    "/reg",
    [
        check('name', 'Incorrect name').notEmpty(),
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length 6 characters')
            .isLength({ min: 6 })
    ],
    registration
);

userRouter.post(
    "/login",
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Incorrect password')
            .isLength({ min: 6 })
    ],
    login
);

userRouter.get(
    "/",
    authMiddleware,
    auth
);

userRouter.post(
    "/cart",
    authMiddleware,
    add
);

userRouter.delete(
    "/cart/:id",
    authMiddleware,
    remove
);

userRouter.put(
    "/cart",
    authMiddleware,
    reduce
);

module.exports = userRouter;