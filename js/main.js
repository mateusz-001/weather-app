const getCity = e => {
    e.preventDefault();

    const city = document.querySelector('.search-input').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a28b044e26238c5b98009176e305b0dd`

    fetch(url)
        .then((response) => response.json())
        .then((data) => showWeather(data)) 
}

const showWeather = (data) => {
    const {name} = data;
    const {country} = data.sys;
    const {temp} = data.main;
    const {pressure} = data.main;
    const {humidity} = data.main;
    const {speed} = data.wind;

    console.log(name,country,temp,pressure,humidity,speed);
    const cityName = document.querySelector('.city-name');
    cityName.textContent = `${name}, ${country}`;

    const temperature = document.querySelector('.temp-value');
    temperature.textContent = Math.floor(temp);

    const pressureInfo = document.querySelector('.value-pressure');
    pressureInfo.textContent = `${pressure} hPa`;

    const humidityInfo = document.querySelector('.value-humidity');
    humidityInfo.textContent = `${humidity} %`;

    const windInfo = document.querySelector('.value-wind');
    windInfo.textContent = `${speed} km/h`
}

document.querySelector('.search-button').addEventListener('click',getCity);