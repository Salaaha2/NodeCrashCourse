const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// ejs in new folder
// app.set('views', 'myviews');

// connect to mongoDB
const dbURI = 'mongodb+srv://alykaasalaah:Norseqw~4@nodeblog.mwjbo8l.mongodb.net/?retryWrites=true&w=majority'
// connect the connection string
mongoose.connect(dbURI);

// Listen for request
app.listen(3000);

// middlewear & static files (files to make public)
// uses a folder named public
app.use(express.static('public'))

// middlewear with Morgan
app.use(morgan('dev'));

// middlewear
// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })
// // middlewear next
// app.use((req, res, next) => {
//     console.log('in the next middlewear');
//     next();
// })

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur.'},
    ];

    // res.send('<p>home page</p>');
    // requested from old html style
    // res.sendFile('./views/index.html', { root: __dirname });

    // view with the help ejs view engine above
    res.render('index', { title: 'Home', blogs });

});
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' })

});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
// Use function for every single incoming request, if none matches paths from above , does not carry on from rest of code. Places at bottom!
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' });
})