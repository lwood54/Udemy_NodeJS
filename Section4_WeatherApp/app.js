const yargs = require('yargs');

const geocode = require('./geocode/geocode'); // leaving .js off is ok because this file is a .js file (app.js)
const weather = require('./weather/weather.js'); // left on .js just to show it works both ways

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (geoErrorMessage, geoResults) => {
    if (geoErrorMessage) {
        console.log(errorMessage);
    } else {
        console.log(geoResults.address);
        weather.getWeather(geoResults.latitude, geoResults.longitude, (weatherErrorMessage, weatherResults) => {
            if (weatherErrorMessage) {
                console.log(weatherErrorMessage);
            } else {
                console.log(`Currently, it is ${weatherResults.currentTemp} ºF.`);
                console.log(`It feels like: ${weatherResults.feelsLike} ºF.`);
                console.log(`Upcoming weather: ${weatherResults.skyForDay}`);
            }
        });
    }
});
