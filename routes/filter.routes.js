const express = require("express");
const filtersRouter = express.Router();
const { create, get } = require('../controllers/filters.controler')

filtersRouter.post(
    "/create",
    create
);

filtersRouter.get(
    "/",
    get
);

module.exports = filtersRouter;