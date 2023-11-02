// .. => coming out of the current directory
const Blog = require('../models/blog')
// create functions

const blog_index = (req, res) => {
        // Newest to oldest on creation of time stamp -1
        Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_details = (req, res) => {
        // Find a single docment 
    // Extract ID
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            // Display's this view
            res.render('blogs/details', { blog: result, title:'Blog Details' })
        })
        .catch(err => {
            // console.log(err)
            res.status(404).render('404', { title: 'Blog not found' });
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new Blog' });
}

const blog_create_post= (req, res) => {
        // console.log(req.body);
    // creating new blog
    const blog = new Blog(req.body)

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // redirect to home
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}