var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Book_controller = require('../controllers/Book');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Book ROUTES ///
// POST request for creating a Book. 
router.post('/Book', Book_controller.Book_create_post);
// DELETE request to delete Book.
router.delete('/Book/:id', Book_controller.Book_delete);
// PUT request to update Book.
router.put('/Book/:id', Book_controller.Book_update_put);
// GET request for one Book.
router.get('/Book/:id', Book_controller.Book_detail);
// GET request for list of all Book items.
router.get('/Book', Book_controller.Book_list);
module.exports = router;