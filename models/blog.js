const mongoose = require('mongoose');
// define the structure of the documents from the collection
const Schema = mongoose.Schema;

// Make schema to define structure
const blogSchema = new Schema({
    // Has to be of string type
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// create model based on schema naming it
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;