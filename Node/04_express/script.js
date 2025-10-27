const express = require('express') // this is the package requred okay 

const app = express()
// now u can create routes okay 


// here in this scene u will create middleware 

// app use ke andar 3 function aayegye okay  req, res, next 
app.use(function(req,res,next){
    console.log('middleware chala');
    next(); // request aage formward kr do okay 
});


app.use(function (req, res, next) {
    console.log('middleware chala ek aur baar ');
    next();  
});



// app.get(rout e, requestHandler)    dena h andar  requestHandler ek middleware h  aur ye ke function hota h okay 
app.get('/', (req, res) => {
    res.send('Champion hu mei')
})


app.get('/about', (req, res) => {
    res.send('ABout page hai ye okay ')
})


 
//  see this again donw two okay 
app.get('/profile', function(req, res,next){
    return next(new Error("something went Wrong")) // ye jayega console pe 
});




// now for error handling 

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Something broke! and something went wring here ijay '); // ye jayega front end pe 
})



app.listen(3000) // isse server run hota h okay 










// \Baar baar reload na krne pde ye page so thats why we will install a new pakacge 
// npm i nodemon -g  this is the package

// nodemon script.js    use this now everytime to run the code okay 

// and now u can run it wihtout reloading... just type   nodemon script.js   
// and it will run okay 

// middleware tera phele clega toh ham phele likhege use get se okay 


