const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {    //(request Object, response Object)
    //localhost:3000 in browser
    // console.log('request made');
    //  /GET request 
    //req.url => path that the user visits 
    // console.log(req.url, req.method);

    // Lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();
    greet();

    //set header contenet type
    res.setHeader('Content-Type', 'text/html');

    // Making HTML code in Node appearing on website
    // res.write('<head><link rel="stylesheet" herf="#"</head>');
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end()

    let path = './views/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200; // Success of the browser
        break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; // Ok for the User
        break;
        case '/about-me': //Redirect to the About page
            res.statusCode = 301; // Resourced moved
            res.setHeader('Location', '/about');
            res.end();
        break;
        default:
        path += '404.html';
        res.statusCode = 404; // Everything is far from okay
        break;
    }


    // Create an HTML page to go through Node
    // fs.readFile('./views/index.html', (err, data) => {
        //creates optional paths
    fs.readFile(path, (err, data) => {
    if (err) {
            console.log(err)
            res.end()
        } else {
            // Only for multiple uses
            // res.write(data)
            res.statusCode = 200;
            // use of once
            res.end(data)
        }
    })

});


server.listen(3000, 'localhost', () => {
    //up and running when calling file in terminal
    console.log('Listening for host on port 3000');
})