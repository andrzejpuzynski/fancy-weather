import DashBoard from './DashBoard';
import MainContainer from './MainContainer'; 

export default class FancyWeatherApp {
    constructor(
        latitude,
        longitude
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.dashboardLanguageMenuOpen = false;
        this.dashboardDegreeCelcius = true;
        this.dashboardDegreeFarenheit = false;
        this.dashBoard = new DashBoard();
        this.maincontainer = new MainContainer(
            this.latitude,
            this.longitude
            );
        this.runSearchListener();
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
                this.maincontainer.weather.updateWeatherData(data);
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


