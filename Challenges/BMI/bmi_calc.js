const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello User please continue to <a href='http://localhost:3000/bmicalculator'>BMI Clac</a>");
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = (weight / (height**2))*10000
    res.send(`Your BMI is ${(result.toFixed(2)) }` );
});

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
});