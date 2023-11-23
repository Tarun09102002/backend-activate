const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cron = require("node-cron");
const axios = require("axios");

cron.schedule("*/4 * * *", () => {
	console.log("running a task every 4 minutes");
	axios
		.get(`${process.env.BLOG_WEBSITE_BACKEND}/activate`)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.get("/", (req, res) => {
	return res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
