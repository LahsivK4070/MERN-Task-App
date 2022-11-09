const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// Availabe routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require("./routes/task"));

mongoose.connect(process.env.MONGO_URL)
.then(() => {
	console.log('connected to database');
})
.catch((e)=>{
	console.log("Something went wrong", e);
})

// if (process.env.NODE_ENV == "production") {
// 	app.use(express.static("client/build"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	})
// }

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port`);
})