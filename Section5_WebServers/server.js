const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// we set up the env PORT that Heroku will set automatically, we have
// also made it to where we set the port to 3000 if Heroku has not set
// this variable. (as in, we are running it locally)
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// Uncomment to render maintenance page
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
