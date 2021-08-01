const getCity = (e) => {
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
    const {main} = data.weather[0];

    const cityName = document.querySelector('.city-name');
    cityName.textContent = `${name}, ${country}`;

    const temperature = document.querySelector('.temp-value');
    temperature.textContent = Math.floor(temp);

    const description = document.querySelector('.description');
    description.textContent = main;

    const pressureInfo = document.querySelector('.value-pressure');
    pressureInfo.textContent = `${pressure} hPa`;

    const humidityInfo = document.querySelector('.value-humidity');
    humidityInfo.textContent = `${humidity} %`;

    const windInfo = document.querySelector('.value-wind');
    windInfo.textContent = `${speed} km/h`;

    const weatherIcon = document.querySelector('.weather-icon');
    if(main === 'Clouds'){
        weatherIcon.innerHTML = '&#xf0c2';
    }else if(main === 'Rain' && main === 'Drizzle'){
        weatherIcon.innerHTML = '&#xf740';
    }else if(main === 'Thunderstorm'){
        weatherIcon.innerHTML = '&#xf0e7';
    }else if(main === 'Snow'){
        weatherIcon.innerHTML = '&#xf2dc';
    }else if(main === 'Clear'){
        weatherIcon.innerHTML = '&#xf185';
    }else{
        weatherIcon.innerHTML = '&#xf75f';
    }
    
}

document.querySelector('.search-button').addEventListener('click',getCity);