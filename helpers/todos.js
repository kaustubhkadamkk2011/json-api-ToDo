var db = require("../models");

exports.getTodos = function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err.message);
	});
}

exports.createTodo = function(req,res){
	db.Todo.create(req.body)
	.then(function(newtodo){
		res.status(201).json(newtodo);
	})
	.catch(function(err){
		res.send(err.message);
	});
}

exports.getTodo = function(req,res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundtodo){
		res.status(201).json(foundtodo);
	})
	.catch(function(err){
		res.send(err.message);
	});
}

exports.updateTodo = function(req,res){
	db.Todo.findOneAndUpdate({_id:req.params.todoId},req.body,{new:true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err.message);
	});
}

exports.deleteTodo = function(req,res){
	db.Todo.remove({_id:req.params.todoId})
	.then(function(todo){
		res.json({message:"Deletion Successful"});
	})
	.catch(function(err){
		res.send(err.message);
	});
}

module.exports = exports;
