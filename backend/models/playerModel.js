const mongoose = require('mongoose')
const Schema = mongoose.Schema
const playerSchema = new Schema({
    hero: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    mmr: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Player',playerSchema)



