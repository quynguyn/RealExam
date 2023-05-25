const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const app = express();


const uri =
	"mongodb+srv://quynguyen:xfqM6RcvtWw22Ozf@lazadaclone.cqg5ikw.mongodb.net/RealExam?retryWrites=true&w=majority";

mongoose
	.connect(uri)
	.then(() => {
		console.log("Connect to database successful");
	})
	.catch((error) => {
		console.log(error.message);
	});

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
