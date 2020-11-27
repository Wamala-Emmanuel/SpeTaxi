const express = require("express")
const { Mongoose } = require("mongoose")
const router = express.Router()
const Contact = require("../models/contacts")

router.get("/", async (req, res) => {
    //--await fetch from db--
    return res.data
})

router.post("/add", async (req, res) => {
    //--await post to db--
    const contact = new Contact({
        _id: new Mongoose.Types.ObjectId(),
        name: req.body.name,
    })

    contact
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    res.status(201).json({ addedContact: contact })
})

module.exports = router