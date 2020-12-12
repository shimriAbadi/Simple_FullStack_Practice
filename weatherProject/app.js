const express = require('express');
const app = express();
const path = require('path')
const htpps = require('https');
const { response, json } = require('express');
const bodyPraser = require('body-parser');
app.use(bodyPraser.urlencoded({extended:true}))

 app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/', (req, res) => {
    console.log()    
    let City = req.body.City;
    let CountryCode = req.body.Country;
    let Query = `${City},${CountryCode}`
    let Unit = 'metric';
    const APIKey = `304155669ba7018cd2741b8c20c940dd`
    let weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${Query}&units=${Unit}&appid=${APIKey}`
    htpps.get(weatherAPI,(respone)=>{
        console.log(respone.statusCode)
        respone.on('data',(data)=>{
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            const TempAndFeelsLike = weatherData.main.temp + ' and feels like ' + weatherData.main.feels_like;
            const WeatherDescreption = weatherData.weather[0].description;
            const WeatherImage = weatherData.weather[0].icon;

            res.write(`<h1>The temperature in ${req.body.City} ${req.body.Country} is ${TempAndFeelsLike}</h1>`);
            res.write(`<p> The weather is currently ` + WeatherDescreption + "</p>")
            res.write(`<img src="http://openweathermap.org/img/wn/${WeatherImage}@2x.png"/>`)
            res.send();
        })
    })
});



app.listen(3000, () => {

console.log(`Server started on port 3000`);

});