const getCity = (e) => {
    e.preventDefault();

    const city = document.querySelector('.search-input').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a28b044e26238c5b98009176e305b0dd`

    fetch(url)
        .then((response) => response.json())
        .then((data) => showWeather(data))
        .catch(alert('Wrong city name')) 
}

const showWeather = (data) => {
    const {name} = data;
    const {country} = data.sys;
    const {temp} = data.main;
    const {pressure} = data.main;
    const {humidity} = data.main;
    const {speed} = data.wind;
    const {main} = data.weather[0];

    const cityName = document.querySelector('.city-name');
    if(country == undefined){
        cityName.textContent = name;
    }else if(name === undefined){
        cityName.textContent = "City name unknown"
    }else{ 
        cityName.textContent = `${name}, ${country}`;
    }

    const temperature = document.querySelector('.temp-value');
    temperature.textContent = Math.round(temp);

    const description = document.querySelector('.description');
    description.textContent = main;

    const pressureInfo = document.querySelector('.value-pressure');
    pressureInfo.textContent = `${pressure} hPa`;

    const humidityInfo = document.querySelector('.value-humidity');
    humidityInfo.textContent = `${humidity} %`;

    const windInfo = document.querySelector('.value-wind');
    windInfo.textContent = `${Math.round(speed)} km/h`;

    const weatherIcon = document.querySelector('.weather-icon');
    const body = document.body;
    if(main === 'Clouds'){
        weatherIcon.innerHTML = '&#xf0c2';
        body.style.backgroundImage = 'url(img/clouds.jpg)';
    }else if(main === 'Rain' || main === 'Drizzle'){
        weatherIcon.innerHTML = '&#xf740';
        body.style.backgroundImage = 'url(img/rain.jpg)';
    }else if(main === 'Thunderstorm'){
        weatherIcon.innerHTML = '&#xf0e7';
        body.style.backgroundImage = 'url(img/thunder.jpg)';
    }else if(main === 'Snow'){
        weatherIcon.innerHTML = '&#xf2dc';
        body.style.backgroundImage = 'url(img/snow.jpg)';
    }
    else if(main === 'Clear'){
        weatherIcon.innerHTML = '&#xf185';
        body.style.backgroundImage = 'url(img/sunny.png)';
    }else{
        weatherIcon.innerHTML = '&#xf75f';
        body.style.backgroundImage = 'url(img/clouds.jpg)';
    }
}

document.querySelector('.search-button').addEventListener('click',getCity);