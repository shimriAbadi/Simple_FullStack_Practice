/**************************01_Creating Our First Server with Express************************************* */
const express = require('express');
const app = express();


app.get('/',function(req, res){
    res.send("<h1>Hello World</h1>")
})

app.get('/contact',function(req, res){
    res.send("Contact me at: <a href=mailto:shimri_ab@icloud.com>shimri_ab@icloud.com</a>")
})

app.get("/about",function(req, res){
    res.send("Hello my nam eis shimri abado and Im a student at angela yu school at udemy")
})

app.get("/hobbies",function(req, res){
    res.send("My hobbies is lifthing wight and to deverlop algorhitems")
})

app.listen(3000, function(){
    console.log('The server is runing now... The port is 3000!')
})


