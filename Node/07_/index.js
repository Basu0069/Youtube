const express = require("express");
const app = express();
const path = require('path');
const fs  = require('fs');


// NOw you have to set the view engine too okay 
// this is you shhowing the file handle part okie 

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res){
    fs.readdir(`./files`,function(err,files){
        // jab folder read ho jaye uske baad hi response render ho 
        res.render("index", {files: files});
    })
})




app.get('/file/:filename',function(req,res){
fs.readFile(`./files/${req.params.filename}`,"utf-8", function(err,filedata){
res.render('show', {filename: req.params.filename, filedata: filedata});
    })
})




app.post("/create", function(req,res){
     fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details,function(err){
        res.redirect("/");
        // files create hote hi vapis is page pe aajayegyege okayie 
        
     });
    })









app.listen(3000);






// to run code use nodemon index.js  and npm install ejs 