var BookService = require('./bookService');

var getDataConntrollerfn = async (req, res) =>
{
    var book = await BookService.getDataFromDBService();
    res.send({ "status": true, "data": book });
}

var createUserControllerFn = async (req, res) => 
{
    var status = await BookService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Booking Confirmed" });
    } else {
        res.send({ "status": false, "message": "Error in Booking Slot" });
    }
}
module.exports = { getDataConntrollerfn, createUserControllerFn };