var express = require('express');
const Book_controlers= require('../controllers/Book');
var router = express.Router();
/* GET costumes */
router.get('/', Book_controlers.Book_view_all_Page );
module.exports = router;