var Book = require('../models/Book');

exports.Book_list = async function (req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};
// for a specific Book.
exports.Book_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
// Handle a show one view with id specified by query
exports.Book_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Book.findById(req.query.id)
        res.render('BookDetail',
            { title: 'Book Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Book_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Bookcreate', { title: 'Book Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.Book_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Book.findById(req.query.id)
        res.render('Bookupdate', { title: 'Book Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.Book_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Book.findById(req.query.id)
        res.render('Bookdelete', {
            title: 'Book Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle Book create on POST.
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
// Handle Book delete form on DELETE.
exports.Book_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Book.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Book update form on PUT.
exports.Book_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Book.findById(req.params.id)
        // Do updates of properties
        if (req.body.Book_name)
            toUpdate.Book_name = req.body.Book_name;
        if (req.body.Book_year) toUpdate.Book_year = req.body.Book_year;
        if (req.body.Book_price) toUpdate.Book_price = req.body.Book_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
}

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
// for a specific Book.
exports.Book_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Book.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
