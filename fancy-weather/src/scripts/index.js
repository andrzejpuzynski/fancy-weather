import html from '../template.html';
import img from  '../images/image.png';

import 'normalize.css'; // import from node_modules
import '../styles/stylesheet.css';

import DashBoard from './DashBoard';
import MainContainer from './MainContainer'; 
import { getLinkToImage } from './getLinkToImage.js';

class FancyWeather {
    constructor() {
        this.latitude = '';
        this.longitude = '';
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
        this.dashBoard = new DashBoard();
        this.maincontainer = new MainContainer(
            this.latitude,
            this.longitude
            );
        this.refreshCoordinates();
        getLinkToImage();
    }

    // setListener() {
    //     document.addEventListener('click', console.log("KLIK"))
    // }

    refreshCoordinates() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.maincontainer.geolocationMap.setCoordinates(this.latitude, this.longitude)
                });
        }
        console.log("end")
    };
}
const fancyWeather = new FancyWeather();

