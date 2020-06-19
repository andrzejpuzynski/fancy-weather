import html from '../template.html';
import img from  '../images/image.png';

import 'normalize.css'; // import from node_modules
import '../styles/stylesheet.css';

import DashBoard from './DashBoard';
import MainContainer from './MainContainer'; 
import { getLinkToImage } from './getLinkToImage.js';

class FancyWeather {
    constructor() {
        this.latitude = `54.57`;
        this.longitude = `18.39`;
        this.showcoordinates();
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
        this.dashBoard = new DashBoard();
        this.maincontainer = new MainContainer(
            this.latitude,
            this.longitude
            );
        getLinkToImage();
    }


    showcoordinates() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lng = position.coords.longitude;
                let lat = position.coords.latitude;        
                });
        }
    };
}
const fancyWeather = new FancyWeather();

