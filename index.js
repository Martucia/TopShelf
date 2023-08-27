const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();
const PORT = process.env.PORT || 5003;
const corsMiddleware = require('./middleware/cors.middleware')
const authMiddleware = require('./middleware/auth.middleware')
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const filtersRouter = require("./routes/filter.routes");
const categoryRouter = require("./routes/category.routes");
const reviewRouter = require('./routes/review.routes')
const orderRouter = require('./routes/order.routes');
const couponsRouter = require("./routes/coupons.routes");

const app = express();
app.use(corsMiddleware)
app.use(express.json())

app.use('/images', express.static('./images'));

app.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = `./images/${filename}`;
    res.sendFile(filePath);
});

app.use("/auth", userRoutes);
app.use("/product", productRoutes);
app.use("/filters", filtersRouter);
app.use("/category", categoryRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/coupon", couponsRouter);

app.get("/", authMiddleware, (req, res) => {
    res.json({ message: "Nihay!" });
});

const start = async () => {
    try {
        await mongoose.connect(process.env.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

