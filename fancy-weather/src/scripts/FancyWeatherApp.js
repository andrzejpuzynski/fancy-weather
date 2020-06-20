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
        }
        
        coordinates() {
            console.log(`FancyWeatherApp component show coord: ${this.latitude}, ${this.longitude}`);
        }
        
        updateAppCoordinates(lat, lng) {
            this.latitude = lat;
            this.longitude = lng;
            this.coordinates();
            this.maincontainer.geolocationMap.updateCoordinates(this.latitude, this.longitude);
            this.updateLocationPlaceFromCoordinates(this.latitude, this.longitude);
        }
        
        updateLocationPlaceFromCoordinates(latitude, longitude) {
            const OpenCageDataUrl = 'https://api.opencagedata.com/geocode/v1/json'
            const OpenCageDataKey = '5f24eda1596f49f4b8af4285d6cb0b50'; 
            const OpenCageDataRequest = `${OpenCageDataUrl}?key=${OpenCageDataKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`;
            
            fetch(OpenCageDataRequest)
            .then((response) => response.json())
            .then((data) =>  {
                const country = data.results[0].components.country;
                const town = data.results[0].components.town;
                this.maincontainer.weather.updateLocation(town, country);
                this.maincontainer.weather.updateDate();
        });
    }
}


