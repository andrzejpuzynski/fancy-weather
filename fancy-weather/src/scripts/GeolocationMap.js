
export default class GeolocationMap {
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