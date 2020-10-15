var express = require("express");
var app = express();
var bodyParser = require("body-parser");




var todoRoute = require("./routes/todo");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("index");
});

app.use("/api/todos",todoRoute);

app.listen(3000,function(){
	console.log("Server Started");
});