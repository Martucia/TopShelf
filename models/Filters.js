const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filtersSchema = new Schema({
    id: {
        type: Number
    },
    orders: {
        type: Array
    }
})

module.exports = mongoose.model("Filters", filtersSchema);