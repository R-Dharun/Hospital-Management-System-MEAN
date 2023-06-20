var recpModel = require('./recpModel');

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
  RecpModelData.name = RecpDetails.name;
  RecpModelData.phone=RecpDetails.phone;
  RecpModelData.location=RecpDetails.location;
  RecpModelData.roomadmitted=RecpDetails.roomadmitted;
  RecpModelData.admissionno = RecpDetails.admissionno;
  RecpModelData.status = RecpDetails.status;
  RecpModelData.diagonosis = RecpDetails.diagonosis;

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