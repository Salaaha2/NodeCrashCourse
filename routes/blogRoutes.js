const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// blog routes
router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post)

router.get('/create', blogController.blog_create_get)

// Handling id request to server
router.get ('/:id', blogController.blog_details)

// handeler for the delete request made in details .ejs
router.delete('/:id', blogController.blog_delete)


module.exports = router;