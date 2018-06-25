const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const bookSchema = new Schema({
  // document structure & rules definition here
  title: { type: String, required: true },
  description: { type: String, minlength: 8 },
  author: { type: String, required: true },
  rating: { type: Number, min: 0, max: 10 }
}, {
  // additional settings for the schema here
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);


module.exports = Book;
