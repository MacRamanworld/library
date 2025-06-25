const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const path = require('path');
const cors = require('cors');

//configuration/ middleware

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//controller

const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});