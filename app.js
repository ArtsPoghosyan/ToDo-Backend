const express = require("express");
const ejs = require("ejs");
const path = require("path");

// express server
const app = express();

// ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(express.json()); 

// routes
app.use('/', require("./routes/indexRouter.js"));

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Connected");
});