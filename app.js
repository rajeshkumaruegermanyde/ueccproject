var express = require('express');
var http = require('http');
// START OF CHANGE
var app = express();
app.use(express.static(__dirname + '/public'));

var port=80;	
const httpOptions = {}
  
const server = http.createServer(httpOptions, app).listen(port, () => {
  console.log('server running at http://localhost:' + port)
});


app.get('/', function(req, res) {

res.sendFile(__dirname+'/public/index.html');


//res.send('<html><body>hello</body></html>')

});






