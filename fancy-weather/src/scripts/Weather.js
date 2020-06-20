
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

        this.locationtime = document.createElement('p');
        this.locationtime.classList.add('weather-data-date-time');
        
        this.locationtemperature = document.createElement('p');
        this.locationtemperature.classList.add('weather-data-temperature-today');
        this.locationtemperature.innerHTML = '19';
        this.locationtemperatureicon = document.createElement('img');
        this.locationtemperatureicon.classList.add('weather-data-weather-icon');
        this.locationtemperatureicon.setAttribute('src', 'images/clear-day.png');

        this.locationtemperaturedescribe = document.createElement('div');
        this.locationtemperaturedescribe.classList.add('weather-data-describe');
        
        this.locationtemperaturedescribemain = document.createElement('p');
        this.locationtemperaturedescribemain.innerHTML = 'Clear';
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribemain);
        this.locationtemperaturedescribefeeltemp = document.createElement('p');
        this.locationtemperaturedescribefeeltemp.innerHTML = 'Feels Like: 19°';
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribefeeltemp);
        this.locationtemperaturedescribewind = document.createElement('p');
        this.locationtemperaturedescribewind.innerHTML = 'Wind: 7 m/s';
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribewind);
        this.locationtemperaturedescribehumidity = document.createElement('p');
        this.locationtemperaturedescribehumidity.innerHTML = 'Humidity: 67%';
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribehumidity);


        section.appendChild(this.container);
        this.container.appendChild(this.location)
        this.container.appendChild(this.locationtime)
        this.container.appendChild(this.locationtemperature)
        this.container.appendChild(this.locationtemperatureicon)
        this.container.appendChild(this.locationtemperaturedescribe)
    }

    updateLocation(town, country) {
        this.town = town;
        this.country = country;
        this.location.innerHTML = (town && country) ? `${this.town}, ${this.country}` : ``;
    }

    updateDate() {
            let date = new Date();
            let dayname = date.toLocaleString('en', {weekday: 'short'});
            let daynumeric = date.toLocaleString('en', {day: 'numeric'});
            let month = date.toLocaleString('en', {month: 'long'});
            let hour = date.getHours();
            let minutes = '00'.concat(date.getMinutes()).slice(-2);
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