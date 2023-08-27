const express = require("express");
const couponsRouter = express.Router();
const { create, get, getAll } = require('../controllers/coupons.controler')

couponsRouter.post(
    "/",
    create
);

couponsRouter.get(
    "/:text",
    get
);

couponsRouter.get(
    "/",
    getAll
);

module.exports = couponsRouter;