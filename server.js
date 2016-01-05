// This is the main entry point to the app

var express = require('express')

// This is our entry point to the database
//var Tweet = require('./db.js')

var app = express()

app.use(express.static(__dirname + '/static'))

var port = process.env.PORT || 8080
server = app.listen(port, function() {
	console.log('Server listening at http://%s:%s',
		server.address().address, server.address().port)
})

