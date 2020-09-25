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
                description: data.weather[0].description,
                feelsLike: data.main.feels_like,
                temp: data.main.temp,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min
            };
            console.log(data);
            document.getElementById('cityData').innerHTML = `
            <div class="card">
                <div class="card-body border border-info">
                    <h5 class="card-title">${weatherData.cityName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${weatherData.temp}<sup>°C</sup>, feels like ${weatherData.feelsLike}<sup>°C</sup></h6><br>
                    <p class="card-text">${weatherData.description}</p>
                    <p>Min ${weatherData.tempMin}<sup>°C</sup> | Max ${weatherData.tempMax}<sup>°C</sup></p>
                </div>
            </div>`
            ;
        })
        .catch(function (error) {
            console.log(error);
        });

}