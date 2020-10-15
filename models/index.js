var mongoose = require("mongoose");
mongoose.set('debug',true);


mongoose.connect("mongodb://localhost/todoapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

mongoose.Promise = Promise ;

module.exports.Todo = require("./todo");