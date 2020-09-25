const apiKey = '34549a83f1e820ec361f5dd5a305b288';

document.getElementById('getWeather').addEventListener('click', getWeatherData);




function getWeatherData() {
    let cityName = document.getElementById('cityName').value;
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    const promise = fetch(endpoint);

    promise
        .then(response => response.json())
        .then(function (data) {
            const weatherData = {
                cityName: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                feelsLike: data.main.feels_like.toFixed(1),
                temp: data.main.temp.toFixed(1),
                tempMax: data.main.temp_max.toFixed(1),
                tempMin: data.main.temp_min.toFixed(1),
                emojis: emojis[data.weather[0].icon]
            };
            document.getElementById('cityData').innerHTML = `
            <div class="card">
                <div class="card-body border border-info">
                    <h5 class="card-subtitle mb-5">${weatherData.cityName} <sup class="smaller">${weatherData.country}</sup></h5>
                    <h6 class="card-title mb-2">${weatherData.temp}<sup>°C</sup><span class="smaller">feels like ${weatherData.feelsLike}<sup>°C</sup></span></h6><br>
                    <p class="card-text">${weatherData.description} ${weatherData.emojis}</p>
                    <p>Min ${weatherData.tempMin}<sup>°C</sup> | Max ${weatherData.tempMax}<sup>°C</sup></p>
                </div>
            </div>`
            ;

            document.getElementById('form').reset();
        })
        .catch(function (error) {
            console.log(error);
        });
    
    
}

const emojis = {
    '01d': '☀️',
    '02d': '⛅️',
    '03d': '☁️',
    '04d': '☁️',
    '09d': '🌧',
    '10d': '🌦',
    '11d': '⛈',
    '13d': '❄️',
    '50d': '💨',
    '01n': '☀️',
    '02n': '⛅️',
    '03n': '☁️',
    '04n': '☁️',
    '09n': '🌧',
    '10n': '🌦',
    '11n': '⛈',
    '13n': '❄️',
    '50n': '💨',
  };
