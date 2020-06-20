import GeolocationMap from './GeolocationMap';
import Weather from './Weather';
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
        this.main.appendChild(this.weatherSection);
        this.main.appendChild(this.geolocationSection);

        this.weather = new Weather();

        this.geolocationMap = new GeolocationMap(
            latitude,
            longitude
        );
    }


}

