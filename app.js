//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

//CONNECT DATABASE
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true });

// ARTICLE SCHEMA
const articleSchema = {
  title: String,
  content: String,
};
// ARTICLE MODEL
const Article = mongoose.model('Article', articleSchema);

//TODO

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
