const apiKey = '482f9c9a8dad8bd54eaee047d7883eb2'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('#searchBox')
const searchBtn = document.querySelector('#searchBtn')
const weatherIcon = document.querySelector('#weatherIcon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()

    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + ' °C'
    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#humidity').innerHTML = data.main.humidity + ' %'
    document.querySelector('#wind').innerHTML = data.wind.speed + ' Km/h'

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'

    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png'

    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png'

    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'

    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png'

    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'images/snow.png'

    }
    else if (data.weather[0].main == 'Wind') {
        weatherIcon.src = 'images/wind.png'

    }
}

searchBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        searchBox.value = ''

    }
});

searchBtn.addEventListener('click', (event) => {
    checkWeather(searchBox.value);
    searchBox.value = ''


});

