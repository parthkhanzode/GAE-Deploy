document.addEventListener('DOMContentLoaded', callback) => {
    const cityInput = document.getElementById('city-input');
    const GetWeatherButton = document.getElementById('get-weather-btn');
    const WeatherInfo = document.getElementById('weather-info');
    const CityName = document.getElementById('city-name');
    const Temp = document.getElementById('temperature');
    const Desc = document.getElementById('description');
    const error_msg = document.getElementById('error-message');

    const API_KEY = '4cb44e723744ac0d2eb94424b941678b' // env variables

    GetWeatherButton.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (city) return;

        // it may throw an error
        // server/database is always in another continent
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }
    });

    async function fetchWeatherData(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        return await response.json();
    }

    function displayWeatherData(data) {
        CityName.textContent = data.name;
        Temp.textContent = `Temperature: ${data.main.temp}°C`;
        Desc.textContent = `Weather: ${data.weather[0].description}`;
        WeatherInfo.classList.remove('hidden');
        error_msg.classList.add('hidden');
    }

    function showError() {
        WeatherInfo.classList.add('hidden');
        error_msg.classList.remove('hidden');
    }
}
