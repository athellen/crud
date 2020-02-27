const mongoose = require ("mongoose")

const articleSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Content:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("articles", articleSchema)