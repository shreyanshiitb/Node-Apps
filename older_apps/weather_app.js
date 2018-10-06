var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.wunderground.com/cgi-bin/findweather/getForecast?query=pws:IDELHINE8";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $("[data-variable='temperature'] .wx-value").html();
      sunrise = $("[data-variable='civilSunrise'] .wx-value").html();

      
    console.log("It’s " + temperature + " degrees Fahrenheit in Delhi and sunrise will occur at " + sunrise);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});