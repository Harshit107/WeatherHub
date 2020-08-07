
let nodeGeocoder = require('node-geocoder');
const chalk = require('chalk');




  /**********    Getting Latitude and Longitude   ****** */


  let options = {
    provider: 'openstreetmap'
  };
  let geoCoder = nodeGeocoder(options);

 const getLocation = (lmyLocation,callback)=>
 {
    geoCoder.geocode(lmyLocation)

    .then((res)=> {
      const data = {
          lat :  res[0].latitude,
          long : res[0].longitude
      }

      callback(undefined,data);
  
    })
    .catch((err)=> {
      const error = {
       err : 'Error!! Location Not Found'
      }
      callback(error,undefined) ;

    });
 }

 /***************   Getting Data From here      ********** */



module.exports = getLocation;