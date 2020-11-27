const mongoose = require("mongoose")

const conatactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
})

module.exports = mongoose.model("Contact", conatactSchema)