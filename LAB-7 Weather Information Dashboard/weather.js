// Replace with your actual free OpenWeatherMap API key
const API_KEY = 'YOUR_API_KEY_HERE'; 

const getWeather = async () => {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('weather-info');
    
    if (!city) return;

    try {
        display.innerHTML = 'Loading...';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        
        display.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Conditions: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        display.innerHTML = `<p class="error">${error.message}. Please try again.</p>`;
    }
};