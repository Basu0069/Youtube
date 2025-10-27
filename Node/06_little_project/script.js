// UNDERSTANDING THE CONCEPT OF DIR 

// console.log(__dirname+'/public'); // this is the same thing that i will wrtie down below okay 


// but imo path.join will be better okay 
// const path = require('path');
// console.log(path.join(__dirname, 'public'));























const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); // ye iske baad ek folder create kro public 
// iska mtlb h sari static files images videos stylesheets insbko dundne ke liye jana Public folder mei okay 
app.set('view engine', 'ejs');// aapka backedn kya view krega 


// now setting up route here 



// ejs se ab tum kisi bhi route mei send ki jagah render likh skte ho kay 
// aur andar tumhe bs aisa koi page likhna h jo views mei ho okay 

app.get("/",function(req,res){
    res.render("index")
});


// ab yaha pe ham profile bnayegye 
app.get("/profile/:username",function(req,res){
    // req.params.username // do this to get username that u have writeen down below okay 
    res.send(`welcome, ${req.params.username}`);
});


app.get("/author/:username/:age",function(req,res){
    res.send(`welcome , ${req.params.username} of age ${req.params.age}`);
    
});


app.listen(3000,function(){
    console.log("it is runnin'");

})

// run it with npx nodemon  script.js or nodemon script.js
// install npm i ejs 
