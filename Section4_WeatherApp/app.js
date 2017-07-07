const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true
}, (error, response, body) => {
    // print both lat and lon
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat} \nLongitude: ${body.results[0].geometry.location.lng}`);
});
