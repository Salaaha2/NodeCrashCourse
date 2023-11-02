// server
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// ejs in new folder
// app.set('views', 'myviews');

// connect to mongoDB
const dbURI = 'mongodb+srv://alykaasalaah:Norseqw~4@nodeblog.mwjbo8l.mongodb.net/node-practice?retryWrites=true&w=majority'
// connect the connection string
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(dbURI)
// Listen for request
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// middlewear & static files (files to make public)
// uses a folder named public
app.use(express.static('public'))
// can use on req object, accepting form data
app.use(express.urlencoded({ extended: true }));
// middlewear with Morgan
app.use(morgan('dev'));



// mongoose and mongo snadbox routes
// app.get('/add-blog', (req, res) => {
//     // Create new instance
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });
//     // Mongoose auto takes timestamp

//     // Save newly added info to the blogs collection, saved on the instance of
//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// // retrive all blogs
// app.get('/all-blogs', (req, res) => {
//     // Gets all of the documents in the blogs collection
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6541915c4fc2e434c42d9bbc')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })


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
    res.redirect('/blogs');

    // res.send('<p>home page</p>');
    // requested from old html style
    // res.sendFile('./views/index.html', { root: __dirname });

    // view with the help ejs view engine above
    // res.render('index', { title: 'Home', blogs });

});
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' })

});

// Ex blog routes defined
app.use('/blogs', blogRoutes)

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