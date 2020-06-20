
export default class Weather {
    constructor(
        country,
        town
    ) {
        this.country = '';
        this.town = '';
        this.renderWeather();
        this.updateLocation();
    }

    renderWeather() {
        const section = document.querySelector('.weather');

        this.container = document.createElement('div');
        this.container.classList.add('weather-data');
        
        this.location = document.createElement('p');
        this.location.classList.add('weather-data-location');
        this.location.innerHTML = `${this.town}, ${this.country}`;

        this.locationtime = document.createElement('p');
        this.locationtime.classList.add('weather-data-date-time');
        this.locationtime.innerHTML = '';
        
        section.appendChild(this.container);
        this.container.appendChild(this.location)
        this.container.appendChild(this.locationtime)
    }

    updateLocation(town, country) {
        this.town = town;
        this.country = country;
        this.location.innerText = `${this.town}, ${this.country}`;
    }

    updateDate() {
            let date = new Date();
            let dayname = date.toLocaleString('en', {weekday: 'short'});
            let daynumeric = date.toLocaleString('en', {day: 'numeric'});
            let month = date.toLocaleString('en', {month: 'long'});
            let hour = date.getHours();
            let minutes = date.getMinutes();
            this.locationtime.innerHTML = `${dayname} ${daynumeric} ${month} ${hour}:${minutes}`;  
    }

    html() {
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
              <div class="forecast">
                <p class="forecast-day">Tuesday</p>
                <p class="forecast-temperature">17°</p>
                <img class="forecast-icon" alt="partly-cloudy-day" src="images/partly-cloudy-day.png">
              </div>
              <div class="forecast">
                <p class="forecast-day">Wednesday</p>
                <p class="forecast-temperature">19°</p>
                <img class="forecast-icon" alt="clear-day" src="images/clear-day.png">
              </div>
            </div>
        `
        return weather
    }
    
}