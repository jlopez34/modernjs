//Init weather object
const storage = new Storage();
const weatherLocation = storage.getLocation();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Set new location
    weather.changeLocation(city, state);
    // Get and display information weather
    getWeather();
    // Hide modal
    $('#locModal').modal('hide');
    // Save new Location
    storage.setLocation(city, state);
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paintInformation(results);
            console.log(results);
        })
        .catch(err => console.log(err));
}