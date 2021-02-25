// ./models/book.js
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String
	},
	authors: [String],
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	link: {
		type: String,
	},
	id: {
		type: String,
	}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;