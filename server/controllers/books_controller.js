const books = require("express").Router()
const db = require("../models")
const { Book } = db
// get -all -books
books.get('/', async (req, res) => {
    try {
        const foundbooks = await Book.findAll()
        res.status(200).json(foundbooks)
    } catch (error) {
        console.log(error)
        res.status(500).send('server Error ')
    }
})

module.exports = books;