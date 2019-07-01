var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));

// routes
app.get('/',function(req,res){
   connection.query(`SELECT * FROM todos`, function(err, todo){
        res.render('index.ejs', {todoList: todo});
    });
});

app.post('/create', function(req, res){
    var item = req.body.item;
    connection.query(`INSERT INTO todos (content) VALUES ("${item}")`, function(err){
        try{
            res.redirect('/');
        }
        catch(err){
            throw err;
        }
    });
});

app.get('/show/:id', function(req,res){
    var id = req.params.id;
    connection.query(`SELECT * FROM todos WHERE id=?`, id, function(err, todo){
        res.render('show.ejs', {todo: todo});
    });
});

app.post('/update/:id' , function(req, res){
    var id = req.params.id;
    var item = req.body.item;
    connection.query(`UPDATE todos SET content="${item}" WHERE id=?`, id, function(err){
        try{
            res.redirect('/');
        }catch(err){
            throw err;
        }
    });
});

app.post('/delete/:id', function(req, res){
    var id = req.params.id;
    connection.query(`DELETE FROM todos WHERE id=?`, id, function(err){
        try{
            res.redirect('/');
        }catch(err){
            throw err;
        }
    });
});

app.get('*', function(req,res){
    res.send(`<h1>Invalid Page</h1>`);
});

app.listen(3000, function(){
    console.log("Express server has started");
});

