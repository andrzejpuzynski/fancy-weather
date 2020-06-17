import GeolocationMap from './GeolocationMap';
import '../images/partly-cloudy-day.png';
import '../images/clear-day.png';

export default class MainContainer {
    constructor (
        latitude,
        longitude
    ) {
        this.main = document.querySelector('.main-container');
        this.geolocationSection = document.createElement('section');
        this.geolocationSection.className = 'geolocation';
        this.weatherSection = document.createElement('section');
        this.weatherSection.className = 'weather';
        this.weatherSection.innerHTML = this.renderWeather();
        this.main.appendChild(this.weatherSection);
        this.main.appendChild(this.geolocationSection);

        this.geolocationMap = new GeolocationMap(
            latitude,
            longitude
        );
    }

    renderWeather() {
        const weather = `
            <div class="weather-data">
              <p class="weather-data-location">Rumia, Poland</p>
              <p class="weather-data-date-time">Sun 14 June &nbsp; 14:44</p>
              <p class="weather-data-temperature-today">19</p>
              <img class="weather-data-weather-icon" src="images/clear-day.png" alt="clear-day">
              <div class="weather-data-describe">
                <p>Clear</p>
                <p>Feels Like: 19°</p>
                <p>Wind: 7 m/s</p>
                <p>Humidity: 67%</p>
              </div>
              <div class="forecast">
                <p class="forecast-day">Monday</p>
                <p class="forecast-temperature">16°</p>
                <img class="forecast-icon" alt="partly-cloudy-day" src="images/partly-cloudy-day.png">
              </div>
              <div class="forecast"><p class="forecast-day">Tuesday</p>
                <p class="forecast-temperature">17°</p>
                <img class="forecast-icon" alt="partly-cloudy-day" src="images/partly-cloudy-day.png">
              </div>
              <div class="forecast"><p class="forecast-day">Wednesday</p>
                <p class="forecast-temperature">19°</p>
                <img class="forecast-icon" alt="clear-day" src="images/clear-day.png">
              </div>
            </div>
        `
        return weather
    }
}

