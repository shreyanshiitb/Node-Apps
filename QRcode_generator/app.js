var qrImage = require('qr-image');
var fs = require('fs');
qrImage.image("www.youtube.com",{type:'png', size:20}).pipe(fs.createWriteStream("MyQRCode.png"));