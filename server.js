var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
const {Client} = require('pg');
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('todo_database', 'postgres', '1234');
// const sequelize = new Sequelize('postgres://user:postgres:1234/todo_database')
const sequelize = new Sequelize('todo_database', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});

var User = sequelize.define('todo', {
    todo_id: Sequelize.INTEGER,
    description: Sequelize.STRING
  });
  
  sequelize.sync().then(function() {
    return User.create({
        todo_id: 123,
        description: 'Hello world'
    });
  }).then(function(jane) {
    console.log('got jane here =====', jane.get({
      plain: true
    }));
  });
// const client = new Client({
//     host : 'localhost',
//     user : 'postgres',
//     password : '1234',
//     port : 5432,
//     database : 'todo_database'
// })

// client.connect().then(() => console.log("connected"))
// .then(() => {
//   client.query("INSER INTO todo(description)  ")
// })
// .catch(err => console.log("got error =====>" , err))
app.get('/' , function(req , res){
    console.log("api Called");
})


app.listen(port);
console.log('app is listening at port',port)
