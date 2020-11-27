const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("Contact", contactSchema)