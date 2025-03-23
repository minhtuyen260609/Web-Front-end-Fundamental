const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

function getWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (weatherData[cityInput]) {
        const data = weatherData[cityInput];
        resultDiv.innerHTML = `
        <div class="weather">
          <h2>${cityInput}</h2>
          <div class="icon">${data.icon}</div>
          <p><strong>${data.temperature}°C</strong> - ${data.description}</p>
          <p>Độ ẩm: ${data.humidity}%</p>
          <p>Tốc độ gió: ${data.windSpeed} km/h</p>
        </div>
      `;
    } else {
        resultDiv.innerHTML = `<div class="error">Thành phố không tìm thấy!</div>`;
    }
}  