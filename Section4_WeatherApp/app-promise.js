const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }

    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a6f6cd8a8cbce56354e867c8068fee35/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var currentTemp = response.data.currently.temperature;
    var feelsLike = response.data.currently.apparentTemperature;
    var skyForDay = response.data.hourly.summary;
    console.log(`Currently, it is ${currentTemp} ºF.`);
    console.log(`It feels like: ${feelsLike} ºF.`);
    console.log(`Upcoming weather: ${skyForDay}`);
}).catch((e) => {
    // console.log(e);
    if (e.code === 'ECONNREFUSED') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
});
