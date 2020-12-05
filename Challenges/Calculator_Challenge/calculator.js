const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    console.log(parseInt(num1)+parseInt(num2))
    res.send('Thanks for data we have store it');
});

app.listen(3000, function(){
    console.log('Server is runing right now!')
})