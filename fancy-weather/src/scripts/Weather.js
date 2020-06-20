
export default class Weather {
    constructor(
        country,
        town
    ) {
        this.country = '';
        this.town = '';
        this.timezoneoffset;
        this.todaytemperature;
        this.todayfeellike;
        this.next1temp;
        this.next2temp;
        this.next3temp;
        this.next1day = '';
        this.next2day = '';
        this.next3day = '';
        this.renderWeather();
        this.updateLocation();
        this.runEventListener()
    }

    renderWeather() {
        const section = document.querySelector('.weather');

        this.container = document.createElement('div');
        this.container.classList.add('weather-data');

        this.container.addEventListener('click', (e) => this.changeDegrees());
        
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
    
    updateDate(timezone) {
        let date = new Date();
        let dayname = date.toLocaleString('en', {weekday: 'short', timeZone: `${timezone}`});
        let daynumeric = date.toLocaleString('en', {day: 'numeric', timeZone: `${timezone}`});
        let month = date.toLocaleString('en', {month: 'long', timeZone: `${timezone}`});
        let hour = date.toLocaleString('en', {timeZone: `${timezone}`, hour: 'numeric', hourCycle: 'h23'});
        let minutes = date.toLocaleString('en', {timeZone: `${timezone}`, minute: 'numeric'});
        this.locationtime.innerHTML = `${dayname} ${daynumeric} ${month} ${hour}:${minutes}`;
        
        // set names of next 3 days
        let next1day = new Date();
        next1day.setTime(next1day.getTime() + 1 * (24 * 60 * 60 * 1000));
        next1day = next1day.toLocaleString('en', {weekday: 'long', timeZone: `${timezone}`});
        this.next1day = next1day;
        let next2day = new Date();
        next2day.setTime(next2day.getTime() + 2 * (24 * 60 * 60 * 1000));
        next2day = next2day.toLocaleString('en', {weekday: 'long', timeZone: `${timezone}`});
        this.next2day = next2day;
        let next3day = new Date();
        next3day.setTime(next3day.getTime() + 3 * (24 * 60 * 60 * 1000));
        next3day = next3day.toLocaleString('en', {weekday: 'long', timeZone: `${timezone}`});
        this.next3day = next3day;
    }
    
    updateWeatherData(data) {
        this.updateDate(data.timezone);
        let weatherdata = data;
        // current day
        this.todaytemperature = `${Math.floor(weatherdata.current.temp)}`
        this.locationtemperature.innerHTML = this.todaytemperature;
        this.locationtemperatureicon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`);
        
        this.locationtemperaturedescribemain.innerHTML = `${weatherdata.current.weather[0].description}`;
        this.todayfeellike = weatherdata.current.feels_like;
        this.locationtemperaturedescribefeeltemp.innerHTML = `Feels Like: ${this.todayfeellike.toFixed(1)}°`;
        this.locationtemperaturedescribewind.innerHTML = `Wind: ${weatherdata.current.wind_speed} m/s`;
        this.locationtemperaturedescribehumidity.innerHTML = `Humidity: ${weatherdata.current.humidity} %`;
        
        // forecast 1 day
        this.forecastday1day.innerHTML = `${this.next1day}`;
        this.next1temp = weatherdata.daily[1].temp.day;
        this.forecastday1temperature.innerHTML = `${this.next1temp.toFixed(0)}°`;
        this.forecastday1icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`)
        // forecast 2 day
        this.forecastday2day.innerHTML = `${this.next2day}`;
        this.next2temp = weatherdata.daily[2].temp.day;
        this.forecastday2temperature.innerHTML = `${this.next2temp.toFixed(0)}°`;
        this.forecastday2icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`)
        // forecast 3 day
        this.forecastday3day.innerHTML = `${this.next3day}`;
        this.next3temp = weatherdata.daily[3].temp.day;
        this.forecastday3temperature.innerHTML = `${this.next3temp.toFixed(0)}°`;
        this.forecastday3icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`) 
    }

    runEventListener() {
        let celciusHook = document.querySelector('.dashboard-buttons-c');
        let fahrenheitHook = document.querySelector('.dashboard-buttons-f');
        celciusHook.addEventListener('click', (e) => this.changeDegreesFahrenheitToCelcius())
        fahrenheitHook.addEventListener('click', (e) => this.changeDegreesCelciusToFahrenheit())
    }

    changeDegreesFahrenheitToCelcius() {
            this.locationtemperature.innerHTML = `${Number(this.todaytemperature).toFixed(0)}`;
            this.locationtemperaturedescribefeeltemp.innerHTML = `Feels Like: ${Number(this.todayfeellike).toFixed(1)}°`;
            this.forecastday1temperature.innerHTML = `${Number(this.next1temp).toFixed(0)}°`;
            this.forecastday2temperature.innerHTML = `${Number(this.next2temp).toFixed(0)}°`;
            this.forecastday3temperature.innerHTML = `${Number(this.next3temp).toFixed(0)}°`;      
    } 
         
    changeDegreesCelciusToFahrenheit() {
            this.locationtemperature.innerHTML = `${((Number(this.todaytemperature) * 9/5) + 32).toFixed(0)}`;
            this.locationtemperaturedescribefeeltemp.innerHTML = `Feels Like: ${((Number(this.todayfeellike) * 9/5) + 32).toFixed(1)}°`;
            this.forecastday1temperature.innerHTML = `${((Number(this.next1temp) * 9/5) + 32).toFixed(0)}°`;
            this.forecastday2temperature.innerHTML = `${((Number(this.next2temp) * 9/5) + 32).toFixed(0)}°`;
            this.forecastday3temperature.innerHTML = `${((Number(this.next3temp) * 9/5) + 32).toFixed(0)}°`;       
    }
}