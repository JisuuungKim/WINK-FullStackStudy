const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);