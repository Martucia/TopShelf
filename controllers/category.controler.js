const Category = require('../models/Category')

const create = async (req, res, next) => {
    try {
        const category = new Category(req.body)

        await category.save()

        return res.status(201).json({ message: 'Category created', category })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const get = async (req, res, next) => {
    try {
        const category = await Category.find({})

        return res.status(201).json(category)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

module.exports = { create, get };