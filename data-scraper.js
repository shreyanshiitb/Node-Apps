var Xray = require('x-ray');
var x = Xray();
var converter = require('json-2-csv');


x('http://www.justdial.com/Noida/painter', 'li.cntanr', [{
  name: '.jcn' ,
  phone: '.contact-info',
  address: 'p.address-info',
}])
  .paginate('.dis a@href')
  .write('results.json')