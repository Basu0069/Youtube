const express = require("express");
const app = express();
const path = require('path');
const fs  = require('fs');


// NOw you have to set the view engine too okay 
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render("index");
    })
})


app.listen(3000);






// to run code use nodemon index.js  and npm install ejs 