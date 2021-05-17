const express = require("express")
const bodyParser = require("body-parser");

const app = express();
	app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res) {
	var w = Number(req.body.weight);
	var h = Number(req.body.height);
	var bmi = w/(h*h);
	res.send("<h1>The BMI is " + bmi + ".</h1>");
});

app.listen(3000 , function(){
	console.log("Server has started on port 3000.")
});