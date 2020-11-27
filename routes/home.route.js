const express = require("express")
const router = express.Router()
const Contact = require("../models/contacts")

router.get("/", (req, res) => {
    //--await fetch from db--

    res.send(res)
})

router.post("/add", (req, res) => {
    //--await post to db--
    const contact = new Contact({
        // _id: new Mongoose.Schema.Types.ObjectId(),
        name: req.body.name,
    })

    contact
        .save()
        .then(() => console.log("Contact saved"))
        .catch(err => console.log(err))
    res.status(201).json({ addedContact: contact })
})

module.exports = router