const BookSchema = require ("../book-model/book.js");


exports.createBook = async (req, res) => {
    const reqBody = req.body;
    const data = await BookSchema.create(reqBody);
    if (data) {
      return res.status(200).json({ status: "Success", data: data });
    } else {
      return res.status(400).json({ status: "Failed"});
  }
  };


exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookSchema.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getBook = async (req, res) => {
  try {
    const book = await BookSchema.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: "unsucessfull" });
  }
};


exports.updateBook = async(req, res) => {
    const id = req.params.id;
    const Query = { _id: id };
    const reqBody = req.body;
    const update =await BookSchema.updateOne(Query, reqBody)
      if (update) {
        res.status(200).json({ satus: "Update Success", data: update });
      } else {      
       res.status(404).json({ satus: "Update Fail", data: err });
      }  
  };



exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await BookSchema.deleteOne({ _id: id });
      if (result.deletedCount > 0) {
        res.status(200).json({ status: "Remove Success", data: result });
      } else {
        res.status(404).json({ status: "Remove Fail", message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ status: "Internal Server Error", message:"Book Delete Unsuccesfull" });
    }
  };
  
