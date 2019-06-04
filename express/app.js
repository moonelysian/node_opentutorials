var express = require('express');
var app = express();
var qs = require('querystring');
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
   connection.query(`SELECT * FROM todos`, function(err, todo){
        console.log(todo);
        res.render('index.ejs', {todoList: todo});
    });
    //res.render('index.ejs', {todoList: todoList});
});

app.post('/create', function(req, res){
    var item = req.body.item;
    console.log(item);
    connection.query(`INSERT INTO todos (content) VALUES ("${item}")`, function(err){
        try{
            res.redirect('/');
        }
        catch(err){
            throw err;
        }
    });
});

app.get('*', function(req,res){
    res.send(`<h1>Invalid Page</h1>`)
})

app.listen(3000, function(){
    console.log("Express server has started");
});

