function getWeather() {
    let city = document.querySelector('#searchBar').value;
    let apiKey = 'API_KEY_HERE'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData);

        let cityLoc = document.querySelector('#cityName');
        let cityName = rawData.name;
        let country = rawData.sys.country;
        cityLoc.innerHTML = cityName + ', ' + country;

        let highTempLoc = document.querySelector('#tempHigh');
        let highTemp = rawData.main.temp_max;
        highTempLoc.innerHTML = highTemp + '&#8457;';

        let lowTempLoc = document.querySelector('#tempLow');
        let lowTemp = rawData.main.temp_min;
        lowTempLoc.innerHTML = lowTemp + '&#8457;';

        let forecastMainLoc = document.querySelector('#forecastMain');
        let forecastDescLoc = document.querySelector('#forecastDesc');
        let forecastMain = rawData.weather[0].main;
        let forecastDesc = rawData.weather[0].description;
        forecastMainLoc.innerHTML = forecastMain;
        forecastDescLoc.innerHTML = forecastDesc;

        let humidityLoc = document.querySelector('#humidity');
        let humidity = rawData.main.humidity;
        humidityLoc.innerHTML = humidity + '%';

        let errorReset = document.querySelector('#errorMsg');
        errorReset.innerHTML = '';
    })
    .catch(error =>{
        let loc = document.querySelector('#errorMsg');
        let errorMessage = "Sorry, that city is not recognized. Please check your spelling and try again!";
        loc.innerHTML = errorMessage;
    })
}
