/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./fancy-weather/src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fancy-weather/src/scripts/DashBoard.js":
/*!************************************************!*\
  !*** ./fancy-weather/src/scripts/DashBoard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashBoard; });
/* harmony import */ var _getLinkToImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLinkToImage.js */ "./fancy-weather/src/scripts/getLinkToImage.js");


class DashBoard {
    constructor() {
        this.isButtonDegreeCelciusActive = true;
        this.isButtonDegreeFarenheitActive = false;
        this.isButtonLanguageEnActive = true;
        this.isButtonLanguagePlActive = false;
        this.isLanguageListOpen = false;
        this.isLanguageEnActive = true;
        this.isLanguagePlAcitve = false;
        this.renderDashboard();
        this.setActiveButtons();
        this.setActiveListLanguage()
        this.addDashboardEventListeners();
    }

    renderDashboard() {
        const dashboard = document.querySelector('.dashboard');
        
        const dashboardButtons = document.createElement('div');
        dashboardButtons.classList.add('dashboard-buttons');

        const dashboardSearch = document.createElement('div');
        dashboardSearch.classList.add('dashboard-search');

        const buttonRefreshBackground = this.renderRefreshBackgroundButton();
        const buttonsLanguageList = this.renderButtonsLanguageList();
        const buttonDegreeCelsius = this.renderButtonDegreeCelcius();
        const buttonDegreeFarenheit = this.renderButtonDegreeFarenheit();

        const inputSearch = this.renderSearchInput();
        const buttonSearch = this.renderSearchButton();

        dashboardButtons.appendChild(buttonRefreshBackground);
        dashboardButtons.appendChild(buttonsLanguageList);
        dashboardButtons.appendChild(buttonDegreeCelsius);
        dashboardButtons.appendChild(buttonDegreeFarenheit);

        dashboardSearch.appendChild(inputSearch);
        dashboardSearch.appendChild(buttonSearch);

        dashboard.appendChild(dashboardButtons);
        dashboard.appendChild(dashboardSearch);

    }

    renderRefreshBackgroundButton() {
        this.buttonRefreshBackground = document.createElement('button');
        this.buttonRefreshBackground.className = 'button dashboard-button-background';
    
        this.buttonRefreshBackgroundSpinner = document.createElement('div');
        this.buttonRefreshBackgroundSpinner.className = 'spinner';
        
        this.buttonRefreshBackgroundButtonIcon = document.createElement('i');
        this.buttonRefreshBackgroundButtonIcon.className = 'fas fa-sync-alt';

        this.buttonRefreshBackground.appendChild(this.buttonRefreshBackgroundSpinner);
        this.buttonRefreshBackgroundSpinner.appendChild(this.buttonRefreshBackgroundButtonIcon);

        return this.buttonRefreshBackground;
    }

    renderButtonsLanguageList() {
        this.buttonsLanguageContainer = document.createElement('div');
        this.buttonsLanguageContainer.className = 'dashboard-buttons-language';

        this.buttonLanguageListTop = document.createElement('button');
        this.buttonLanguageListTop.className = 'button dashboard-button-language-top';

        this.buttonLanguageListTopIcon = document.createElement('i');
        this.buttonLanguageListTopIcon.className = 'fas fa-chevron-down arrow-down';

        this.buttonLanguageList = document.createElement('div');
        this.buttonLanguageList.className = 'dashboard-buttons-language-list';
        
        this.buttonLanguageEn = document.createElement('button');
        this.buttonLanguageEn.className = 'dashboard-button-language-list button';
        this.buttonLanguageEn.innerText = 'en';
        
        this.buttonLanguagePl = document.createElement('button');
        this.buttonLanguagePl.className = 'dashboard-button-language-list button';
        this.buttonLanguagePl.innerText = 'pl';
        
        this.buttonLanguageList.appendChild(this.buttonLanguageEn);
        this.buttonLanguageList.appendChild(this.buttonLanguagePl);
        
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageListTopIcon);
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageListTop);
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageList);

        return this.buttonsLanguageContainer;
    }

    renderButtonDegreeCelcius() {
        this.buttonDegreeCelcius = document.createElement('button');
        this.buttonDegreeCelcius.className = 'button dashboard-buttons-c';
        this.buttonDegreeCelcius.innerText = "°C";
        return this.buttonDegreeCelcius;
    }
    
    renderButtonDegreeFarenheit() {
        this.buttonDegreeFarenheit = document.createElement('button');
        this.buttonDegreeFarenheit.className = 'button dashboard-buttons-f';
        this.buttonDegreeFarenheit.innerText = "°F";
        return this.buttonDegreeFarenheit;
    } 
    
    renderSearchInput() {
        this.inputSearch = document.createElement('input');
        this.inputSearch.className = 'dashboard-search-input';
        this.inputSearch.setAttribute("type", "search");
        this.inputSearch.setAttribute("name", "search-city");
        this.inputSearch.setAttribute("required", "");
        this.inputSearch.setAttribute("placeholder", "Search city or ZIP");

        return this.inputSearch;  
    }

    renderSearchButton() {
        this.buttonSearch = document.createElement('button');
        this.buttonSearch.className = 'button dashboard-search-button';
        this.buttonSearch.innerText = 'search';

        return this.buttonSearch;  
    }

    setActiveButtons() {
        this.isButtonDegreeCelciusActive
            ? this.buttonDegreeCelcius.classList.remove('inactive')
            : this.buttonDegreeCelcius.classList.add('inactive');
        this.isButtonDegreeFarenheitActive
            ? this.buttonDegreeFarenheit.classList.remove('inactive')
            : this.buttonDegreeFarenheit.classList.add('inactive');
        this.isButtonLanguageEnActive
            ? this.buttonLanguageEn.classList.remove('inactive')
            : this.buttonLanguageEn.classList.add('inactive');
        this.isButtonLanguagePlActive
            ? this.buttonLanguagePl.classList.remove('inactive')
            : this.buttonLanguagePl.classList.add('inactive');
        if (this.isLanguageListOpen) {
            this.buttonLanguageListTop.classList.add('top-open');
            this.buttonLanguageListTopIcon.classList.add('arrow-down-open');
            this.buttonLanguageList.classList.add('list-open')
        } else {
            this.buttonLanguageListTop.classList.remove('top-open');
            this.buttonLanguageListTopIcon.classList.remove('arrow-down-open');
            this.buttonLanguageList.classList.remove('list-open')
        };
        if (this.isLanguageEnActive) {
            this.buttonLanguageEn.classList.remove('inactive');
            this.buttonLanguagePl.classList.add('inactive');
        } else {
            this.buttonLanguagePl.classList.remove('inactive');
            this.buttonLanguageEn.classList.add('inactive');       
        }
    }

    setActiveListLanguage() {
        let activeLanguage = this.isLanguageEnActive ? 'en' : 'pl';
        this.buttonLanguageListTop.innerHTML = activeLanguage;
    }

    addDashboardEventListeners() {
    // /-------------------------
        this.buttonRefreshBackground.addEventListener('click', (e) => {
            this.buttonRefreshBackgroundSpinner.classList.add('round');
            this.buttonRefreshBackground.classList.toggle('inactive')
            Object(_getLinkToImage_js__WEBPACK_IMPORTED_MODULE_0__["getLinkToImage"])();
            setTimeout(() => {
                this.buttonRefreshBackgroundSpinner.classList.remove('round');
                this.buttonRefreshBackground.classList.toggle('inactive')
            },
            1000)
        });

        this.buttonDegreeCelcius.addEventListener('click', (e) => {
            if (!this.isButtonDegreeCelciusActive) {
                this.isButtonDegreeCelciusActive = !this.isButtonDegreeCelciusActive;
                this.isButtonDegreeFarenheitActive = !this.isButtonDegreeFarenheitActive;
                this.setActiveButtons();
            }
        });
        this.buttonDegreeFarenheit.addEventListener('click', (e) => {
            if (!this.isButtonDegreeFarenheitActive) {
                this.isButtonDegreeCelciusActive = !this.isButtonDegreeCelciusActive;
                this.isButtonDegreeFarenheitActive = !this.isButtonDegreeFarenheitActive;
                this.setActiveButtons();
            }
        });
        this.buttonLanguageListTop.addEventListener('click', (e) => {
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
        });
        this.buttonLanguageListTopIcon.addEventListener('click', (e) => {
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
        });
        this.buttonLanguageEn.addEventListener('click', (e) => {
            if (!this.isLanguageEnActive) {
                this.isLanguageEnActive = !this.isLanguageEnActive;
                this.isLanguagePlActive = !this.isLanguagePlActive;
            }
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
            this.setActiveListLanguage()
        });
        this.buttonLanguagePl.addEventListener('click', (e) => {
            if (!this.isLanguagePlActive) {
                this.isLanguageEnActive = !this.isLanguageEnActive;
                this.isLanguagePlActive = !this.isLanguagePlActive;
            }
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
            this.setActiveListLanguage();
        });
    }

}

/***/ }),

/***/ "./fancy-weather/src/scripts/FancyWeatherApp.js":
/*!******************************************************!*\
  !*** ./fancy-weather/src/scripts/FancyWeatherApp.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FancyWeatherApp; });
/* harmony import */ var _getLinkToImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLinkToImage.js */ "./fancy-weather/src/scripts/getLinkToImage.js");
/* harmony import */ var _DashBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard */ "./fancy-weather/src/scripts/DashBoard.js");
/* harmony import */ var _MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContainer */ "./fancy-weather/src/scripts/MainContainer.js");



 

class FancyWeatherApp {
    constructor(
        latitude,
        longitude
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
        this.renderHTML();
        this.dashBoard = new _DashBoard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.maincontainer = new _MainContainer__WEBPACK_IMPORTED_MODULE_2__["default"](
            this.latitude,
            this.longitude
            );
        this.runSearchListener();
        }

        renderHTML() {
            this.app = document.querySelector('body');
            this.dashboardContainer = document.createElement('header');
            this.dashboardContainer.classList.add('dashboard');
            this.mainContainer = document.createElement('main');
            this.mainContainer.classList.add('main-container');
            this.app.appendChild(this.dashboardContainer);
            this.app.appendChild(this.mainContainer);
        }
        
        updateAppCoordinates(lat, lng) {
            this.latitude = lat;
            this.longitude = lng;
            this.maincontainer.geolocationMap.updateCoordinates(this.latitude, this.longitude);
            this.updateLocationPlaceFromCoordinates(this.latitude, this.longitude);
            this.updateWeatherData(this.latitude, this.longitude);
        }
        
        updateLocationPlaceFromCoordinates(latitude, longitude) {
            const OpenCageDataUrl = 'https://api.opencagedata.com/geocode/v1/json'
            const OpenCageDataKey = '5f24eda1596f49f4b8af4285d6cb0b50'; 
            const OpenCageDataRequest = `${OpenCageDataUrl}?key=${OpenCageDataKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`;
            
            fetch(OpenCageDataRequest)
            .then((response) => response.json())
            .then((data) =>  {
                const country = data.results[0].components.country;
                if (data.results[0].components.city) {
                    var place = data.results[0].components.city;
                } else if (data.results[0].components.town) {
                    var place = data.results[0].components.town;
                } else if (data.results[0].components.village) {
                    var place = data.results[0].components.village;
                } else {
                    var place = data.results[0].components.county;
                }
                this.maincontainer.weather.updateLocation(place, country);
                this.maincontainer.weather.updateDate();
           });
        }

        updateLocationCoordinatesFromPlace(place) {
            const OpenCageDataUrl = 'https://api.opencagedata.com/geocode/v1/json'
            const OpenCageDataKey = '5f24eda1596f49f4b8af4285d6cb0b50'; 
            const OpenCageDataRequest = `${OpenCageDataUrl}?key=${OpenCageDataKey}&q=${place}`;
            
            fetch(OpenCageDataRequest)
            .then((response) => response.json())
            .then((data) =>  {
                const lat = data.results[0].geometry.lat;
                const lng = data.results[0].geometry.lng;
                this.updateAppCoordinates(lat, lng);
            });
        }
        
        updateWeatherData(latitude, longitude) {
            const OpenWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/onecall'
            const OpenWeatherMapKey = '268d0a9ffef72647f076ffed08035fde'; 
            const OpenWeatherMapExclude = '&exclude=minutely,hourly,historical';
            const OpenWeatherMapRequest = `${OpenWeatherMapUrl}?lat=${latitude}&lon=${longitude}${OpenWeatherMapExclude}&appid=${OpenWeatherMapKey}&units=metric`;
            
            fetch(OpenWeatherMapRequest)
            .then((response) => response.json())
            .then((data) =>  {
                console.log(data)
                let keywordtimezone = data.timezone;
                let keywordweather = data.current.weather[0].main;
                this.maincontainer.weather.updateWeatherData(data);
                Object(_getLinkToImage_js__WEBPACK_IMPORTED_MODULE_0__["getLinkToImage"])(`sky,${keywordweather}`);
            });
        };

        runSearchListener() {
            const searchButton = document.querySelector('.dashboard-search-button');
            searchButton.addEventListener('click', (e) => {
                let searchNewPlace = document.querySelector('.dashboard-search-input');
                this.updateLocationCoordinatesFromPlace(searchNewPlace.value)
                searchNewPlace.value = '';
            })

            document.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                let searchNewPlace = document.querySelector('.dashboard-search-input');
                if(searchNewPlace.value !== "Search city or ZIP") {
                    this.updateLocationCoordinatesFromPlace(searchNewPlace.value)
                    searchNewPlace.value = '';
                }
            }
        });
    }
}




/***/ }),

/***/ "./fancy-weather/src/scripts/GeolocationMap.js":
/*!*****************************************************!*\
  !*** ./fancy-weather/src/scripts/GeolocationMap.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationMap; });

class GeolocationMap {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.renderGeoLocationMap();
        this.updateCoordinates(latitude, longitude)
    }

    renderGeoLocationMap(latidude, longitude) {

        const section = document.querySelector('.geolocation');

        this.container = document.createElement('div');
        this.container.classList.add('geolocation-container');
        this.container.innerHTML = this.positionMap();
        
        const coordinates = document.createElement('div');
        coordinates.classList.add('geolocation-coordinates');
        
        this.coordLatitude = document.createElement('p');
        this.coordLongitude = document.createElement('p');
        
        section.appendChild(this.container);
        section.appendChild(coordinates);
        coordinates.appendChild(this.coordLatitude);
        coordinates.appendChild(this.coordLongitude);
    }
    
    updateCoordinates(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.coordLatitude.innerText = !this.latitude ? `Latitude:  ${Number(0).toFixed(4)}` : `Latitude: ${Number(this.latitude).toFixed(4)}`;
        this.coordLongitude.innerText = !this.longitude ? `Longitude:  ${Number(0).toFixed(4)}` : `Longitude: ${Number(this.longitude).toFixed(4)}`;
        this.container.innerHTML = this.positionMap();
    }
    
    positionMap() {
        const code = `
            <iframe 
              class="geolocation-iframe" 
              src="https://www.google.com/maps/embed/v1/view?center=${this.latitude},${this.longitude}&amp;zoom=10&amp;key=AIzaSyBWWZnqHV3asW7DM3yCQ0dxSHjj_J9LkwE&amp;language=en">
            </iframe>
            `
        return code
    }
}

/***/ }),

/***/ "./fancy-weather/src/scripts/MainContainer.js":
/*!****************************************************!*\
  !*** ./fancy-weather/src/scripts/MainContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _GeolocationMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeolocationMap */ "./fancy-weather/src/scripts/GeolocationMap.js");
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weather */ "./fancy-weather/src/scripts/Weather.js");



class MainContainer {
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

        this.weather = new _Weather__WEBPACK_IMPORTED_MODULE_1__["default"]();

        this.geolocationMap = new _GeolocationMap__WEBPACK_IMPORTED_MODULE_0__["default"](
            latitude,
            longitude
        );
    }


}


/***/ }),

/***/ "./fancy-weather/src/scripts/Weather.js":
/*!**********************************************!*\
  !*** ./fancy-weather/src/scripts/Weather.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weather; });
class Weather {
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
        this.forecastday1icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.daily[1].weather[0].icon}@2x.png`)
        // forecast 2 day
        this.forecastday2day.innerHTML = `${this.next2day}`;
        this.next2temp = weatherdata.daily[2].temp.day;
        this.forecastday2temperature.innerHTML = `${this.next2temp.toFixed(0)}°`;
        this.forecastday2icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.daily[2].weather[0].icon}@2x.png`)
        // forecast 3 day
        this.forecastday3day.innerHTML = `${this.next3day}`;
        this.next3temp = weatherdata.daily[3].temp.day;
        this.forecastday3temperature.innerHTML = `${this.next3temp.toFixed(0)}°`;
        this.forecastday3icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherdata.daily[3].weather[0].icon}@2x.png`) 
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

/***/ }),

/***/ "./fancy-weather/src/scripts/getLinkToImage.js":
/*!*****************************************************!*\
  !*** ./fancy-weather/src/scripts/getLinkToImage.js ***!
  \*****************************************************/
/*! exports provided: getLinkToImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkToImage", function() { return getLinkToImage; });
const getLinkToImage = (keywords) => {
    keywords = keywords ? `${keywords}` : `weather`;
    const url = `https://api.unsplash.com/photos/random?query=${keywords}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    let backgroundImageS = document.body;

    fetch(url)
      .then(res => res.json())
      .then(data => {
         let newImageSource = data.urls.regular;
          backgroundImageS.setAttribute("style", `background-image: linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%), url("${newImageSource}")`);
        });
    }
   

/***/ }),

/***/ "./fancy-weather/src/scripts/index.js":
/*!********************************************!*\
  !*** ./fancy-weather/src/scripts/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template.html */ "./fancy-weather/src/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/stylesheet.css */ "./fancy-weather/src/styles/stylesheet.css");
/* harmony import */ var _styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FancyWeatherApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FancyWeatherApp */ "./fancy-weather/src/scripts/FancyWeatherApp.js");
/* harmony import */ var _getLinkToImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLinkToImage.js */ "./fancy-weather/src/scripts/getLinkToImage.js");


 // import from node_modules


 


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
const fancyWeather = new _FancyWeatherApp__WEBPACK_IMPORTED_MODULE_3__["default"]();
Object(_getLinkToImage_js__WEBPACK_IMPORTED_MODULE_4__["getLinkToImage"])();
startingBrowserCoordinates();


/***/ }),

/***/ "./fancy-weather/src/styles/stylesheet.css":
/*!*************************************************!*\
  !*** ./fancy-weather/src/styles/stylesheet.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./fancy-weather/src/styles/stylesheet.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./fancy-weather/src/template.html":
/*!*****************************************!*\
  !*** ./fancy-weather/src/template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Fancy weather</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap\"\n  rel=\"stylesheet\">\n  <script src=\"https://kit.fontawesome.com/2d1d7f4dfa.js\" crossorigin=\"anonymous\"></script>\n</head>\n\n<body>\n  \n</body>\n\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./fancy-weather/src/styles/stylesheet.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./fancy-weather/src/styles/stylesheet.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,:after,:before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n:root {\n    --text-colour: rgba(255, 255, 255, 1.0);\n    --background-gradient: linear-gradient(rgba(58, 74, 100, 0.8) 0%, rgba(17, 17, 46, 0.5) 100%);\n    --background-color: #444;\n\n    --button-background:rgba(180,184,187,.7);\n    --button-hover:rgba(180,184,187,1.0);\n    --button-inactive:rgba(76,82,85,.7);\n  }\n\nhtml {\n    font-size: 62.5%\n}\n\nbody {\n    box-sizing: border-box;\n    background: no-repeat fixed center;\n    background-size: cover;\n    font-family: Montserrat,tahoma,sans-serif;\n    font-size: 2.2rem;\n    background-color: var(--background-color);\n}\n\nh1 {\n    margin: 0;\n    font-size: 4.4rem\n}\n\nul {\n    list-style: none\n}\n\na {\n    color: inherit;\n    text-decoration: none\n}\n\nbutton {\n    border: 0;\n    outline: 0;\n    cursor: pointer\n}\n\n /* -------- dashboard --------- */\n .dashboard {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 4rem 4rem\n}\n\n@media screen and (max-width: 700px) {\n    .dashboard {\n        justify-content: center;\n        margin: 4rem 4rem\n    }\n}\n\n.dashboard-buttons,\n.dashboard-search {\n    display: flex\n}\n\n@media screen and (max-width: 700px) {\n    .dashboard-buttons,\n    .dashboard-search {\n        width: 100%;\n        justify-content: center;\n    }\n    .dashboard-buttons {\n        margin-bottom: 3rem;\n    }\n}\n\n.button {\n    width: 4.4rem;\n    height: 4.4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: .5rem;\n    background: var(--button-background);\n    font-family: inherit;\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: #fff;\n    text-transform: uppercase;\n    transition: all .2s\n}\n\n.button:hover {\n    background-color: var(--button-hover)\n}\n\n.inactive {\n    background: var(--button-inactive);\n    color: hsla(0,0%,100%,.7);\n    cursor: pointer\n}\n\n/* button background */\n\n.dashboard-button-background {\n}\n\n.spinner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 4rem;\n    font-size: 2.2rem;\n}\n\n.round {\n    transform: rotate(1turn);\n    transition: transform 600ms ease-in-out;\n    transition-delay: 50ms;\n}\n\n/* button language */\n\n.dashboard-buttons-language {\n    position: relative;\n    margin-left: 1rem\n}\n\n.dashboard-button-language-top {\n    position: relative;\n    padding-right: 20px;\n    width: 7.1rem\n}\n\n.dashboard-button-language-top i {\n    position: absolute;\n    right: 1rem;\n    margin-left: 0rem;\n}\n\n.top-open {\n    border-radius: .5rem .5rem 0 0\n}\n\n.dashboard-buttons-language-list {\n    position: absolute;\n    max-height: 0;\n    overflow: hidden;\n}\n\n.dashboard-buttons-language > i {\n    position: absolute;\n    text-align: center;\n    right: 0.5rem;\n    z-index: 100;\n    margin-top: 1.4rem;\n    color: var(--text-colour);\n    font-size: 1.6rem;\n    cursor: pointer;\n}\n\n.list-open {\n    height: 20rem;\n    height: auto;\n    overflow: visible;\n}\n\n.dashboard-button-language-list {\n    width: 7.1rem;\n    border-radius: 0;\n    cursor: auto\n}\n\n.dashboard-button-language-list:last-child {\n    border-radius: 0 0 .5rem .5rem\n}\n\n.arrow-down {\n    width: 2rem;\n    height: 1,5rem;\n}\n\n.arrow-down-open {\n    transform: rotate(180deg);\n}\n\n/* button degrees */\n.dashboard-buttons-c {\n    margin-left: 1rem;\n    border-radius: .5rem 0 0 .5rem;\n    cursor: auto\n}\n\n.dashboard-buttons-f {\n    border-radius: 0 .5rem .5rem 0;\n    cursor: auto\n}\n\n\n/* search */\n\n.dashboard-search-input {\n    width: 27.4rem;\n    height: 4.4rem;\n    border: .1rem solid rgba(180,184,187,.7);\n    border-radius: .5rem 0 0 .5rem;\n    padding: 1.3rem 1.5rem;\n    background: rgba(76,82,85,.7);\n    font-family: inherit;\n    font-size: 1.4rem;\n    color: #fff\n}\n\n.dashboard-search-input:required {\n    outline: 0\n}\n\n.dashboard-search-input::placeholder {\n    font-size: 1.4rem;\n    color: #fff;\n    opacity: 1\n}\n\n.dashboard-search-input:focus::placeholder {\n    opacity: 0\n}\n\n.dashboard-search-button {\n    width: 10rem;\n    margin-left: 0;\n    border-radius: 0 .5rem .5rem 0\n}\n\n/* Main */\n\n.main-container {\n    display: flex;\n    height: 600px;;\n    justify-content: space-between;\n    margin: 4rem 4rem;\n}\n\n@media screen and (max-width: 1200px) {\n    .main-container {\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n}\n\n/* WEATHER */\n\n.weather {\n    background-color: none;\n}\n\n@media screen and (max-width: 1200px) {\n    .weather {\n        margin-bottom: 4rem;\n    }\n}\n\n.weather-data {\n    display: grid;\n    grid-template-columns: repeat(3,22rem);\n    text-transform: uppercase;\n    color: var(--text-colour);\n    font-weight: 700\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data {\n        grid-template-columns: repeat(2,22rem);\n    }\n}\n\n.weather-data-location {\n    min-height: 50px;\n    grid-column: 1/4;\n    font-size: 4.4rem\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data-location {\n        grid-column: 1/3;\n    }\n}\n\n.weather-data-date-time {\n    grid-column: 1/4;\n    grid-row: 2/3;\n    margin-top: 1rem;\n    font-size: 2.2rem;\n    text-transform: capitalize;\n    font-weight: 400\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data-date-time {\n        grid-column: 1/3;\n    }\n}\n\n.weather-data-temperature-today {\n    grid-column: 1/3;\n    grid-row: 3/5;\n    display: flex;\n    align-self: flex-end;\n    justify-content: center;\n    font-size: 28rem;\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data-temperature-today {\n        grid-column: 1/3;\n        font-size: 24;\n    }\n}\n\n.weather-data-weather-icon {\n    width: 17rem;\n    height: 17rem;\n    grid-column: 3;\n    grid-row: 3;\n    border-width: 0px;\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data-weather-icon {\n        width: 12rem;\n        height: 12rem;\n        grid-column: 2/3;\n        grid-row: 5;\n    }\n}\n\n.weather-data-describe {\n    grid-column: 3;\n    grid-row: 4;\n    display: flex;\n    flex-wrap: wrap;\n    align-self: flex-end;\n    justify-content: flex-start;\n    line-height: 3.5rem;\n    padding-bottom: 3.5rem;\n}\n\n@media screen and (max-width: 700px) {\n    .weather-data-describe {\n        grid-column: 1/2;\n        grid-row: 5;\n    }\n}\n\n.forecast {\n    display: grid;\n    margin-right: 5rem\n}\n\n@media screen and (max-width: 700px) {\n    .forecast {\n        grid-column: 1/3;\n        margin-bottom: 4rem;\n    }\n}\n\n.forecast-day {\n    grid-column: 1/3;\n    font-size: 2rem;\n    font-weight: 700;\n    text-transform: uppercase\n}\n\n.forecast-temperature {\n    font-size: 6rem\n}\n\n.forecast-icon {\n    width: 6.7rem;\n    height: 6.7rem\n}\n\n/* MAP */\n\n.geolocation {\n    display: flex;\n    flex-wrap: wrap;\n    align-self: flex-start;\n    justify-content: flex-end;\n    width: 37.5rem;\n}\n\n.geolocation-container {\n    width: 37.5rem;\n    height: 37.5rem;\n    border-radius: 5%;\n    overflow: hidden\n}\n\n.geolocation-coordinates {\n    margin-top: 2rem;\n    font-size: 2.2rem;\n    color: var(--text-colour);\n}\n\n.geolocation-coordinates p {\n    text-align: right;\n    line-height: 3rem;\n}\n\n.geolocation-iframe {\n    width: 200%;\n    height: 200%;\n    -webkit-transform: translate(-25%,-25%);\n    transform: translate(-25%,-25%);\n    border: 0;\n    border-radius: 5%\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });