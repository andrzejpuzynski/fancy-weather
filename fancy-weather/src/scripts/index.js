import { hello } from './hello.js';

import html from '../template.html';
import img from  '../images/image.png';

import 'normalize.css'; // import from node_modules
import '../styles/stylesheet.css';

import DashBoard from './DashBoard';
import { getLinkToImage } from './getLinkToImage.js';

// setting queries

class FancyWeather {
    constructor() {
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
    }

}

hello();
const fancyWeather = new FancyWeather();
const dashBoard = new DashBoard();
getLinkToImage();