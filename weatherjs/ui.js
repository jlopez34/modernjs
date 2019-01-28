class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paintInformation(weatherObservation) {
        console.log(weatherObservation);
        
        this.location.textContent = weatherObservation.display_location.full;
        this.desc.textContent = weatherObservation.weather;
        this.string.textContent = weatherObservation.temperature_string;
        this.icon.setAttribute('src', weatherObservation.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weatherObservation.relative_humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weatherObservation.feelslike_string}`;
        this.dewpoint.textContent = `Dewpoing: ${weatherObservation.dewpoint_string}`;
        this.wind.textContent = `Wind: ${weatherObservation.wind_string}`;
    }
}