import { hello } from './hello.js';
import { getLinkToImage } from './getLinkToImage.js';

import html from '../template.html';
import img from  '../images/image.png';

import 'normalize.css'; // import from node_modules
import '../styles/stylesheet.css';

import DashBoard from './dashBoard';

// setting queries

class FancyWeather {
    constructor() {
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
        this.setUpListeners();
    }

    // ------     LISTENERS
    setUpListeners() {
        this.setUpListenerRefreshBackground();
    }

    setUpListenerRefreshBackground() {
        let refreshBackgroundButton = document.querySelector('.dashboard-button-background');
        let spinner = refreshBackgroundButton.querySelector('.spinner');

        refreshBackgroundButton.addEventListener('click', (e) => {
            spinner.classList.add('round');
            refreshBackgroundButton.classList.toggle('inactive')
            getLinkToImage();
            setTimeout(() => {
                spinner.classList.remove('round');
                refreshBackgroundButton.classList.toggle('inactive')
            },
            1000)
        });
    }
}

hello();
const fancyWeather = new FancyWeather();
getLinkToImage();