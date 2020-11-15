const mongoose = require('mongoose')

const MovieModel = new mongoose.Schema({
    title: {
        type: String,
        required : true,
    },
    mainActor: {
        type: String,
        required : true,
    },
    rating: {
        type: Number,
        default : 0,
    },

})

module.exports = mongoose.model('Movie',MovieModel)