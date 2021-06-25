const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
    content: String,
    creator: String,
    title: String,
}, {
    timeStamps: true
})

module.exports = mongoose.model('Pin', pinSchema)