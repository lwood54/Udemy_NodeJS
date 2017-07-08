const express = require('express');

// to create an app, just call the method
var app = express();

// setting up our http route handlers
// here we are registering our handler
// this is the '/' route, aka the 'root' route
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Logan',
        likes: [
            'programming',
            'woodworking',
            'Cowboys'
        ]
    });
});

// setting up a 2nd page, simply call app.get() again.
// make sure to use '/', but after that you can identify it how you want.
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

// setting a 3rd page, for handling failed requests.
app.get('/bad', (req, res) => {
    res.send({
        statuscode: 404,
        error: 'Unable to complete request'
    });
});

app.listen(3000); // common port for development
