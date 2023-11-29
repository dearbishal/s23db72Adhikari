var express = require('express');
const Book_controlers= require('../controllers/Book');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET detail Book page */
router.get('/detail',secured, Book_controlers.Book_view_one_Page);

/* GET create Book page */
router.get('/create',secured, Book_controlers.Book_create_Page);

/* GET create update page */
router.get('/update',secured, Book_controlers.Book_update_Page);

/* GET delete costume page */
router.get('/delete',secured, Book_controlers.Book_delete_Page);

/* GET Book */
router.get('/', Book_controlers.Book_view_all_Page );
module.exports = router;

