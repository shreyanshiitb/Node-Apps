const request = require('request')

var getWeather = (lat,lng,callback)=>{

    request({
        url:`https://api.darksky.net/forecast/4e83fa881de9378f06bc8d319fd4c150/${lat},${lng}`,
        json:true
    },(err,response,body)=>{
        if(!err && response.statusCode===200)
            callback(undefined,body.currently.temperature)
        else
            callback('can\'t fetch weather')
    }
    )
}

module.exports = {
    getWeather
}