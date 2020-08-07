const request = require('request')



var forcast = (lat,long,callback)=>{
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=937fa0a75417ba95606ffd369fe2b621&units=metric`
    request({url : url,json:true},(error,response)=>{
    
        const data = response.body
        
        if(data.message)
        {
            const errMsg = {
               err : "Sorry!, No Data Found at this Location : ( "
            };
            callback(errMsg,undefined);
        }
         else{
            const temp = data.current.temp
            const msg ={
               "value": `Curretnt temperature is ${temp}  ${String.fromCharCode(176)+'C'} outside`
            } 
            console.log(msg)
            callback(undefined, msg);
        }
       
    })
}

module.exports = forcast;