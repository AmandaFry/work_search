// Require the Express Module
var express = require('express');
// Require body-parser (to receive post data from clients in the server comes as rec.body)
var bodyParser = require('body-parser');
// Require path
var path = require('path');

// Create an Express App
var app = express();
//SETTING UP app needed information
app.use(express.static(path.join(__dirname, './client')));
// Integrate body-parser with my App
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('Listening on port 8000');
});