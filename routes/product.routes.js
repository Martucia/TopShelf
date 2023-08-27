const express = require("express");
const { create, get, catalog, getGroup, search } = require('../controllers/product.controler')
const authMiddleware = require('../middleware/auth.middleware')
const productRouter = express.Router();
const fileMiddleware = require('../middleware/file.middleware')

productRouter.post(
    "/create",
    authMiddleware,
    fileMiddleware.any('images'),
    create
);

productRouter.get(
    "/:id",
    get
);

productRouter.post(
    "/search",
    search
);

productRouter.get(
    "/",
    catalog
);

productRouter.get(
    "/group/:type",
    getGroup
);


module.exports = productRouter;

