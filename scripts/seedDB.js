// ./scripts/seedDB.js
const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gbsearch", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}).then( () => {
	console.log("[i] MongoDB connected successfully");
}).catch( (err) => {
	console.log(`[E] MongoDB connection error: ${err}`);
});

const booksSeed = [
	{
		authors: ["Suzanne Collins"],
		description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
		image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
		title: "The Hunger Games",
	},
	{
		authors: ["Human Scientist Ph.D., et. al."],
		description: "Working with others to improve one's vision can make learning about vision more efficient and perhaps help us all see a bit further.",
		image: "Book_Image_URL",
		link: "Book_Information_URL",
		title: "Vision, Research & Development",
	},
];

db.Book.remove({}).then(() => db.Book.collection.insertMany(booksSeed))
.then((data) => {
	console.log(data.result.n + " records inserted!");
	process.exit(0);
})
.catch((err) => {
	console.log(err);
	process.exit(1);
});	