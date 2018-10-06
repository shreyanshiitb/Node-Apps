const geocode = require('./geocode.js')
const request = require('request')
const weather = require('./weather.js')
const yargs = require('yargs')
var argv = yargs.argv

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
if(errorMessage)
    console.log(errorMessage)
else
{
    console.log(JSON.stringify(results.address))
    weather.getWeather(results.latitude,results.longitude,(errorMessage, results)=>{
        if(errorMessage)
        console.log(errorMessage)
        else
        console.log(JSON.stringify(results))
        })
}
})


