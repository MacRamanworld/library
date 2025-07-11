const books=require('express').Router()
const db=require('../models')
const { Book } = db

//get all boooks

books.get('/', async (req, res) => {
  try {
    const foundBooks = await Book.findAll();
    res.status(200).json(foundBooks);
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = books;