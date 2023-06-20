var BookModel = require('./bookModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        BookModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (BookDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var bookModelData = new BookModel();

 
        bookModelData.name = BookDetails.name;
        bookModelData.email=BookDetails.email;
        bookModelData.date=BookDetails.date;
        bookModelData.address = BookDetails.address;
        bookModelData.phone = BookDetails.phone;

        bookModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }