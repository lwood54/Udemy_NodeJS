const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// hbs.registerHelper() takes 2 arguments, the name of the argument, and the function to run
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
