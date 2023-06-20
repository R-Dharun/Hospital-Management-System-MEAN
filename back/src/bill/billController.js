var userService = require('./billService');

var getDataConntrollerfn = async (req, res) =>
{
    var book = await userService.getDataFromDBService();
    res.send({ "status": true, "data": book });
}
var createUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Patient created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Patient details" });
    }
}


var updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Bill Updated"} );
     } else {
         res.send({ "status": false, "message": "User Updated Failed" });
     }
}

var deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Bill  Deleted"} );
     } else {
         res.send({ "status": false, "message": "Bill Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };
