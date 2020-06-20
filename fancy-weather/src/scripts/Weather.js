
export default class Weather {
    constructor(
        country,
        town
    ) {
        this.country = '';
        this.town = '';
        this.next1day = '';
        this.next2day = '';
        this.next3day = '';
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
        
        // Current weather
        this.locationtemperature = document.createElement('p');
        this.locationtemperature.classList.add('weather-data-temperature-today');

        this.locationtemperatureicon = document.createElement('img');
        this.locationtemperatureicon.classList.add('weather-data-weather-icon');
        
        // Describe current weather
        this.locationtemperaturedescribe = document.createElement('div');
        this.locationtemperaturedescribe.classList.add('weather-data-describe');
        
        this.locationtemperaturedescribemain = document.createElement('p');
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribemain);
        
        this.locationtemperaturedescribefeeltemp = document.createElement('p');
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribefeeltemp);
        
        this.locationtemperaturedescribewind = document.createElement('p');
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribewind);
        
        this.locationtemperaturedescribehumidity = document.createElement('p');
        this.locationtemperaturedescribe.appendChild(this.locationtemperaturedescribehumidity);
        
        // Forecast Day 1
        this.forecastday1container = document.createElement('div');
        this.forecastday1container.classList.add('forecast');
        this.forecastday1day = document.createElement('p');
        this.forecastday1day.classList.add('forecast-day');
        this.forecastday1temperature = document.createElement('p');
        this.forecastday1temperature.classList.add('forecast-temperature');
        this.forecastday1icon = document.createElement('img');
        this.forecastday1icon.classList.add('forecast-icon');
        this.forecastday1container.appendChild(this.forecastday1day);
        this.forecastday1container.appendChild(this.forecastday1temperature);
        this.forecastday1container.appendChild(this.forecastday1icon);
        // Forecast Day 2
        this.forecastday2container = document.createElement('div');
        this.forecastday2container.classList.add('forecast');
        this.forecastday2day = document.createElement('p');
        this.forecastday2day.classList.add('forecast-day');
        this.forecastday2temperature = document.createElement('p');
        this.forecastday2temperature.classList.add('forecast-temperature');
        this.forecastday2icon = document.createElement('img');
        this.forecastday2icon.classList.add('forecast-icon');
        this.forecastday2container.appendChild(this.forecastday2day);
        this.forecastday2container.appendChild(this.forecastday2temperature);
        this.forecastday2container.appendChild(this.forecastday2icon);
        // Forecast Day 3
        this.forecastday3container = document.createElement('div');
        this.forecastday3container.classList.add('forecast');
        this.forecastday3day = document.createElement('p');
        this.forecastday3day.classList.add('forecast-day');
        this.forecastday3temperature = document.createElement('p');
        this.forecastday3temperature.classList.add('forecast-temperature');
        this.forecastday3icon = document.createElement('img');
        this.forecastday3icon.classList.add('forecast-icon');
        this.forecastday3container.appendChild(this.forecastday3day);
        this.forecastday3container.appendChild(this.forecastday3temperature);
        this.forecastday3container.appendChild(this.forecastday3icon);
        
        section.appendChild(this.container);
        this.container.appendChild(this.location)
        this.container.appendChild(this.locationtime)
        this.container.appendChild(this.locationtemperature)
        this.container.appendChild(this.locationtemperatureicon)
        this.container.appendChild(this.locationtemperaturedescribe)
        this.container.appendChild(this.forecastday1container);
        this.container.appendChild(this.forecastday2container);
        this.container.appendChild(this.forecastday3container);
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
        
        // set names of next 3 days
        let next1day = new Date();
        next1day.setTime(next1day.getTime() + 1 * (24 * 60 * 60 * 1000));
        next1day = next1day.toLocaleString('en', {weekday: 'long'});
        this.next1day = next1day;
        let next2day = new Date();
        next2day.setTime(next2day.getTime() + 2 * (24 * 60 * 60 * 1000));
        next2day = next2day.toLocaleString('en', {weekday: 'long'});
        this.next2day = next2day;
        let next3day = new Date();
        next3day.setTime(next3day.getTime() + 3 * (24 * 60 * 60 * 1000));
        next3day = next3day.toLocaleString('en', {weekday: 'long'});
        this.next3day = next3day;
    }
    
    updateWeatherData(data) {
        this.updateDate();
        console.log(data);
        let weatherdata = data;
        // current day
        this.locationtemperature.innerHTML = `${Math.floor(weatherdata.current.temp)}`;
        this.locationtemperatureicon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`);
        
        this.locationtemperaturedescribemain.innerHTML = `${weatherdata.current.weather[0].description}`;
        this.locationtemperaturedescribefeeltemp.innerHTML = `Feels Like: ${weatherdata.current.feels_like.toFixed(1)}°`;
        this.locationtemperaturedescribewind.innerHTML = `Wind: ${weatherdata.current.wind_speed} m/s`;
        this.locationtemperaturedescribehumidity.innerHTML = `Humidity: ${weatherdata.current.humidity} %`;
        
        // forecast 1 day
        this.forecastday1day.innerHTML = `${this.next1day}`;
        this.forecastday1temperature.innerHTML = `${weatherdata.daily[1].temp.day.toFixed(0)}°`;
        this.forecastday1icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`)
        // forecast 2 day
        this.forecastday2day.innerHTML = `${this.next2day}`;
        this.forecastday2temperature.innerHTML = `${weatherdata.daily[2].temp.day.toFixed(0)}°`;
        this.forecastday2icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`)
        // forecast 3 day
        this.forecastday3day.innerHTML = `${this.next3day}`;
        this.forecastday3temperature.innerHTML = `${weatherdata.daily[3].temp.day.toFixed(0)}°`;
        this.forecastday3icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`)
        
    }    
}