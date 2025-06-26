const express = require('express');
// const { Sequelize } = require('sequelize');
const app = express();
const path = require('path');
const cors = require('cors');

//configuration/ middleware

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(Path2D.join__dirname,'../build'));
//controller

// ...existing code...

const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

// Global error handler (add this before app.listen)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});