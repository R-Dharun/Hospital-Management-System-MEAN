var recpModel = require('./billModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        recpModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (RecpDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        
  var RecpModelData = new recpModel();
  RecpModelData.treatment = RecpDetails.treatment;
  RecpModelData.Drugadministered=RecpDetails.Drugadministered;
  RecpModelData.Bill=RecpDetails.Bill;
  RecpModelData.date=RecpDetails.date;
  RecpModelData.status = RecpDetails.status;


        RecpModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,RecpDetails) => {     
    console.log(RecpDetails);
    return new Promise(function myFn(resolve, reject) {
        recpModel.findByIdAndUpdate(id,RecpDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        recpModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }