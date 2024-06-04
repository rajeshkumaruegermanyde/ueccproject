var express = require('express');
var http = require('http');
// START OF CHANGE
var app = express();
app.use(express.static(__dirname + '/public'));
var fs = require('fs');
var path = require('path');


var port=3000;	
const httpOptions = {}
  
const server = http.createServer(httpOptions, app).listen(port, () => {
  console.log('server running at http://localhost:' + port)
});


app.get('/', function(req, res) {

res.sendFile(__dirname+'/public/index.html');


//res.send('<html><body>hello</body></html>')


});


app.get('/resources/employee_hr_data.csv', function(req, res) {

//res.sendFile(__dirname+'/public/index.html');
var filePath = __dirname+'/' + request.url;
console.log(filepath)


            contentType = 'text/csv';
            
 

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

//res.send('<html><body>hello</body></html>')


});



