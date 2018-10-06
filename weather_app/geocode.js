const request = require('request')

var geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address)
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDJNt9bnJp09x7Sl5_iopPTBusBCViEMQo`,
        json:true
    },(error,response,body) => {
        if(error){
            callback('unable to connect')}
        else if(body.status==='OK'){
            var results = {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            }
            callback(undefined,results)
        }
        else if(body.status==="OVER_QUERY_LIMIT")
            callback("API down...API down")
        else if(body.status==='ZERO RESULTS')
            callback("unable to find address")
            
    // console.log(JSON.stringify(body,undefined,2))
    // console.log(JSON.stringify(body,undefined,2))
    })
}

module.exports = {
    geocodeAddress
}