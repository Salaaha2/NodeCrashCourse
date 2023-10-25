const express = require('express');

// express app
const app = express();

// Listen for request
app.listen(3000);

app.get('/', (req, res) => {

    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });

});
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname });

});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// Use function for every single incoming request, if none matches paths from above , does not carry on from rest of
// code. Places at bottom!
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})