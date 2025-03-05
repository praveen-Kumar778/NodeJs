const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        trim: true,
        maxLength: [100, 'Books title cannot be more than 100 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, 'Publication Year is required'],
        min: [1000, 'Year must be at least 1000'],
        max: [new Date().getFullYear(), "Year Cannot be in future"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Book', bookSchema);