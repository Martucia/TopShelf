const Product = require('../models/Product');
const Review = require('../models/Review');
const mongoose = require("mongoose");
const { getUserId } = require('../utils/functions')

const create = async (req, res, next) => {
    try {
        const files = req.files;

        const filesName = files.map(file => file.filename);

        const product = new Product({ ...req.body, images: filesName });

        await product.save()

        return res.status(201).json(product)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const get = async (req, res, next) => {
    try {
        const id = req.params.id;

        const product = await Product.findOne({ _id: id }).populate("reviews");

        if (!product) {
            return res.status(500).json({ message: 'Such a product does not exist' })
        }

        let userId;

        getUserId(req.headers.authorization, async (result) => {
            userId = result;

            const reviews = await Review.find({ productId: id }, { mark: 1, _id: 0 });

            const sum = reviews.reduce((acc, curr) => acc + Number(curr.mark), 0);

            const average = sum / reviews.length;

            if (userId) {
                const review = await Review.findOne({ authorId: userId, productId: id });

                product.reviews = product.reviews.filter(rev => String(rev._id) !== String(review?._id));

                return res.status(200).json({ product: { ...product.toObject(), average, review } });
            }

            return res.status(200).json({ product: { ...product.toObject(), average } });
        });

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const search = async (req, res, next) => {
    try {
        const query = req.query.q;

        const products = await Product.find({ name: { $regex: query, $options: "i" } });

        return res.status(200).json(products);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
}

const catalog = async (req, res, next) => {
    try {

        const { orderBy, minPrice, maxPrice, category, ...queryParams } = req.query;

        if (category) {
            queryParams.category = new mongoose.Types.ObjectId(category);
        }

        let params = [];

        if (minPrice && maxPrice) {
            queryParams.price = {
                $gte: Number(minPrice),
                $lte: Number(maxPrice)
            }
        }

        params.push({
            $match: queryParams
        });

        if (orderBy === "Review Count") {
            params.push({
                $addFields: {
                    arrayLength: { $size: "$reviews" }
                }
            });

            params.push({
                $sort: {
                    arrayLength: 1
                }
            });
        } else if (orderBy === "Price: Low to High") {
            params.push({
                $sort: {
                    price: 1
                }
            });
        } else if (orderBy === "Price: High to Low") {
            params.push({
                $sort: {
                    price: -1
                }
            });
        } else if (orderBy === "Product Name") {
            params.push({
                $sort: {
                    name: 1
                }
            });
        } else if (orderBy === "Newness") {
            params.push({
                $sort: {
                    createdAt: -1
                }
            });
        }

        const products = await Product.aggregate(params);

        return res.status(200).json(products)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const getGroup = async (req, res, next) => {
    try {
        const type = req.params.type;
        let limit = 12;

        let params = [];

        switch (type) {
            case 'bestSellers':
                params.push({
                    $sort: {
                        sales: -1
                    }
                })
                break;
            case 'promotions':
                params.push({
                    $match: {
                        discount: {
                            $gt: 0
                        }
                    }
                });
                break;
            case 'weed':
                params.push({
                    $match: {
                        category: new mongoose.Types.ObjectId("6460f49ab7d467235dae24f6")
                    }
                });
                break;
            case 'sale':
                params.push({
                    $match: {
                        discount: {
                            $gt: 0
                        }
                    }
                });

                params.push({
                    $sort: {
                        discount: -1
                    }
                })
                break;
            case 'newest':
                params.push({
                    $sort: {
                        createdAt: -1
                    }
                })
                limit = 10;
                break;
            default:
                return res.status(500).json({ message: "I don't know this type =(" })
        }

        params.push({ $limit: limit });

        const products = await Product.aggregate(params);

        return res.status(200).json(products)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}



module.exports = { create, get, search, catalog, getGroup };