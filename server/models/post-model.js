const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        rating: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)
