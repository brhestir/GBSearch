const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models/index");

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}).then( () => {
	console.log("[i] MongoDB connected successfully");
}).catch( (err) => {
	console.log(`[E] MongoDB connection error: ${err}`);
});

// Define API routes here
app.get("/api/config", (req, res) => {
	insertSeedData();
	res.json( { seedDataInserted: true } );
});

// Use router files
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

/**
 * insertSeedData
 * Inserts initial data into database for testing
 */
function insertSeedData() {
	console.log(`[i] insertSeedData executing...`);
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
	
	db.Book.deleteMany({}).then(() => db.Book.collection.insertMany(booksSeed))
	.then((data) => {
		let rv = `${data.result.n} records inserted!`;
		console.log(rv);
	})
	.catch((err) => {
		console.log(err);
	});	
}



