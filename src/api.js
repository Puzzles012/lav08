const express = require("express");
const app = express();
const PORT = 3000;
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
	var user = greeting(req.params.name);
	
	
});
module.exports = app;