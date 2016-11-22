var express = require('express');
var routes = require('./routes/index.js');
var app = express();

app.use('/public',express.static(process.cwd() + '/app/public'));

routes(app);

var port = process.env.PORT || 8080;

app.listen(port, function(){
   console.log('listening on port %d', port); 
});