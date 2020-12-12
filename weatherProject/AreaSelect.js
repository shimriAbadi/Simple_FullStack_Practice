function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function city(){
    let country = prompt('Enter your country name:');
    let city = prompt('Enter your city name');
    city=capitalizeFirstLetter(city)
    return `${city},${country}`
}



Area();