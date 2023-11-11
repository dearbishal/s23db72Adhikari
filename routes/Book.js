var express = require('express');
const Book_controlers= require('../controllers/Book');
var router = express.Router();

/* GET detail costume page */
router.get('/detail', Book_controlers.Book_view_one_Page);


/* GET Book */
router.get('/', Book_controlers.Book_view_all_Page );
module.exports = router;

