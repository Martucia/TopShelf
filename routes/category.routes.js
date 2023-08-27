const express = require("express");
const categoryRouter = express.Router();
const { create, get } = require('../controllers/category.controler')

categoryRouter.post(
    "/create",
    create
);

categoryRouter.get(
    "/",
    get
);

module.exports = categoryRouter;