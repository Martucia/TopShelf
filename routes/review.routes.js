const express = require("express");
const { get, create, edit } = require('../controllers/review.controler')
const authMiddleware = require('../middleware/auth.middleware')
const reviewRouter = express.Router();

reviewRouter.get(
    "/",
    get
);

reviewRouter.post(
    "/:id",
    authMiddleware,
    create
);

reviewRouter.patch(
    "/:id",
    authMiddleware,
    edit
);


module.exports = reviewRouter;

