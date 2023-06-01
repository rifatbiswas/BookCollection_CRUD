const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    Title: {
      type: "string",
      required: true,
    },
    Author: {
      type: "string",
      required: true,
    },
    Description: {
      type: "string",
      required: false,
    },
    PublishedYear: {
      type: "number",
      required: false,
    },
  },
  {timestamps: true, versionKey:false }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
