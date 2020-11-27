const express = require("express")
const router = express.Router()
const Contact = require("../models/contacts")

router.get("/", (req, res) => {
    Contact.find()
        .exec()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).json({ error: err })
        })
})

router.post("/add", (req, res) => {
    const contact = new Contact({
        name: req.body.name,
    })

    contact.save()
        .then(() => console.log("Contact saved"))
        .catch(err => console.log(err))
})

module.exports = router