var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));

var todoList=[];

// routes
app.get('/',function(req,res){
   connection.query(`select * from todos`, function(err, todo){
        console.log(todo);
    });
    res.render('index.ejs', {todoList: todoList});
});

app.post('/create', function(req, res){
    console.log('create!!');
    var item = req.body.item;
    todoList.push(item);
    res.redirect('/');
});

app.get('*', function(req,res){
    res.send(`<h1>Invalid Page</h1>`)
})

app.listen(3000, function(){
    console.log("Express server has started");
});

