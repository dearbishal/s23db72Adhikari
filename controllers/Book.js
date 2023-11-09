var Book = require('../models/Book');

exports.Book_list = async function (req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};
// for a specific Book.
exports.Book_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
// Handle Book create on POST.
exports.Book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};
// Handle Book delete form on DELETE.
exports.Book_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};
// Handle Book update form on PUT.
exports.Book_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};

// List of all Book
exports.Book_list = async function (req, res) {
    try {
        theBook = await Book.find();
        res.send(theBook);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Book_view_all_Page = async function (req, res) {
    try {
        theBook = await Book.find();
        res.render('Book', { title: 'Book Search Results', results: theBook });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Books create on POST.
exports.Book_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Book();
    document.Book_name = req.body.Book_name;
    document.Book_year = req.body.Book_year;
    document.Book_price = req.body.Book_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};