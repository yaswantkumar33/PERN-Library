// setting up express server 
// DEPENDICES 
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path')
const cors = require('cors')

// CONFIGUREATION / MIDDLEWARE 
require('dotenv').config();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//CONTROLLERS 
const booksController = require('./controllers/books_controller')
app.use('/api/books', booksController)
//LISTENER 
app.listen(4343, () => {
    console.log("Server Running At 4343")
})