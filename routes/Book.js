var express = require('express');
const Book_controlers= require('../controllers/Book');
var router = express.Router();

/* GET detail Book page */
router.get('/detail', Book_controlers.Book_view_one_Page);

/* GET create Book page */
router.get('/create', Book_controlers.Book_create_Page);

/* GET create update page */
router.get('/update', Book_controlers.Book_update_Page);

/* GET delete costume page */
router.get('/delete', Book_controlers.Book_delete_Page);

/* GET Book */
router.get('/', Book_controlers.Book_view_all_Page );
module.exports = router;

