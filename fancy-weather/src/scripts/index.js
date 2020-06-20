import html from '../template.html';

import 'normalize.css'; // import from node_modules
import '../styles/stylesheet.css';

import FancyWeatherApp from './FancyWeatherApp'; 
import { getLinkToImage } from './getLinkToImage.js';

function startingBrowserCoordinates() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fancyWeather.updateAppCoordinates(latitude, longitude);
            });
    }
};

// Running App
const fancyWeather = new FancyWeatherApp();
getLinkToImage();
startingBrowserCoordinates();


