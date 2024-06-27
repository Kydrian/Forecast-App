document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('city-form');
    const forecastContainer = document.getElementById('forecast-container');

    const apiKey = 'b78c9c7ce1b0bd7212ebb0b83effcbd7';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = document.getElementById('city-input').value;
        getWeatherForecast(city);
    });

    async function getWeatherForecast(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayForecast(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayForecast(data) {
        forecastContainer.innerHTML = '';

        const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        forecastList.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString();
            const temp = day.main.temp.toFixed(1);
            const description = day.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

            const forecastDayEl = document.createElement('div');
            forecastDayEl.classList.add('forecast-day');

            forecastDayEl.innerHTML = `
                <div>
                    <h3>${date}</h3>
                    <p>Temp: ${temp}°C</p>
                    <p>${description}</p>
                </div>
                <img src="${icon}" alt="${description}">
            `;

            forecastContainer.appendChild(forecastDayEl);
        });
    }
});
temp1.textContent=data.list[0].main.temp
    wind1.textContent=data.list[0].wind.speed