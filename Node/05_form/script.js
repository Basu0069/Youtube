// first we ahve installed npm i cookie-parser 

const express = require('express')

const app = express()

// ham beech mie middleware dalege okay 


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// both lines are used to convert not readble format into readble format okay 





app.get('/', (req, res) => {
    res.send('Champion hu mei')
})

app.get('/about', (req, res) => {
    res.send('ABout page hai ye okay ')
})

app.get('/profile', function (req, res, next) {
    return next(new Error("something went Wrong"))
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke! and something went wring here ijay ');
})

app.listen(3000)
