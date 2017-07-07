const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a6f6cd8a8cbce56354e867c8068fee35/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                currentTemp: body.currently.temperature,
                feelsLike: body.currently.apparentTemperature,
                skyForDay: body.hourly.summary
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather
};

// website: https://darksky.net/dev/account
// api call: https://api.darksky.net/forecast/[key]/[latitude],[longitude]
