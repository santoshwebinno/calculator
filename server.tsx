var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(cors())
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.post('/sum', function (req, res) {
   const sum = req.body.values.number1*1 + req.body.values.number2*1
   res.send({'sum': sum});
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening", host, port)
})