const express = require("express");
const { create } = require("../controllers/order.controler")
const authMiddleware = require('../middleware/auth.middleware')
const orderRouter = express.Router();

orderRouter.post(
    "/",
    authMiddleware,
    create
);

module.exports = orderRouter;

