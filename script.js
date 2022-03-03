
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

// 325b02b7bbe0ca1ef0114037143edd17

let APIkey = "325b02b7bbe0ca1ef0114037143edd17";

let weather = document.getElementById("weather");

let country = document.getElementById("country");

let submit = document.getElementById("butt");

let temperature = document.getElementById("temp");

let feelsLike = document.getElementById("feelsLike");

let wind = document.getElementById("wind");

let humidity = document.getElementById("humidity");

let err = document.getElementById("error");

submit.addEventListener("click", getResults);

function getResults(event) {
    event.preventDefault();
    let text = document.getElementById("text").value;
    console.log(text);
    fetchWeather(text);
}

async function fetchWeather(text){
    console.log(text);
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=325b02b7bbe0ca1ef0114037143edd17`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        let val = data.weather[0].description;
        let newWeather = val.toUpperCase();
        console.log(newWeather); let name = text.toUpperCase();
        weather.textContent = newWeather; country.textContent = name;
        let hum = data.main.humidity; let percent = Math.round(hum); let dum = `HUMIDITY: ${percent}%`;
        humidity.textContent = dum; let tm = Math.round(data.main.temp-273.15); temperature.textContent = tm;
        let avg = Math.ceil(data.main.feels_like-273.15); feelsLike.textContent = `FEELS LIKE: ${avg}`; 
        let speed = Math.round(data.wind.speed); wind.textContent = `WIND: ${speed} MPH`;
        err.textContent = "";
    })
    .catch((error) =>{
        err.textContent = "Invalid Location";
    })
}


