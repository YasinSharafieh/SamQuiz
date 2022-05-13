const express = require('express');
const res = require('express/lib/response');
const app = express()
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views','./views');
app.set('view engine' , 'ejs');




app.get('/', function(req, res){
    res.render('Home')
})
app.get('/Quiz.ejs', function(req, res){
    res.render('Quiz')
})
app.get('/script.js', function(req, res){
    res.render('script')
})
app.get('/questions.js', function(req, res){
    res.render('questions')
})
app.get('/Download_samQuiz.ejs', function(req, res){
    res.render('Download_samQuiz')
})
app.get('/about_us.html', function(req, res){
    res.render('about_us')
})
app.listen(3000);