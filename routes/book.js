// routes.js

const express = require('express');
const router = express.Router();
// const bookController = require ("../coltroller/book.js")

const {createBook, getAllBooks, getBook, updateBook, deleteBook} = require ("../coltroller/book.js")



router.post('/books', createBook);

router.get('/readAll', getAllBooks);

router.get('/readOne/:id', getBook);

router.put('/Updatebooks/:id',updateBook);

router.delete('/Deletebooks/:id',deleteBook);

module.exports = router;
