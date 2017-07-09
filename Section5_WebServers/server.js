const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    // to see a full list of of options for processing request data: http://expressjs.com/en/4x/api.html
    // then you can navigate and find other things as well, like: express(), Application, Request, Response, Router
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();// must provide next, so that Express knows to move on to the next call
});

// because we haven't supplied the function next(), the page will stop at this request
// and render the maintenance.hbs file
app.use((req, res, next) => {
    res.render('maintenance.hbs');
});
// NOTE: location definitely matters, if the page that is being called is before this command
// then the page won't know to stop.

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Mr. Wood's Science Page!",
        welcomeMessage: "Yeah science!!!"
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        statuscode: 404,
        error: 'Unable to complete request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
