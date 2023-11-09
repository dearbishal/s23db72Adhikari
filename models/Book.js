const { Double } = require("mongodb")
const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({

    Book_name: {
        type: String,
        required: true
    },
    Book_year: {
        type: String,
        required: true
    },
    Book_price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("Book", BookSchema)