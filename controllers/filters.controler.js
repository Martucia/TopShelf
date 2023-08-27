const Filters = require('../models/Filters')

const create = async (req, res, next) => {
    try {
        const filters = new Filters(req.body)

        await filters.save()

        return res.status(201).json({ message: 'Filters created', filters })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

const get = async (req, res, next) => {
    try {
        const filters = await Filters.findOne({ id: 1 })
        
        return res.status(201).json(filters)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

module.exports = { create, get };