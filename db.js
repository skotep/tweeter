// We'll use the mongoose object document model (ODM)
// to interface with MongoDB.
var mongoose = require('mongoose')

// Place here Scott's mongodb instance string
var url = 'mongodb://localhost:27017/tweeter'

// Your mongodb instance on Heroku will be 
// set as an environment variable
if (process.env.MONGOLAB_URI) {
	url = process.env.MONGOLAB_URI;
}

mongoose.connect(url)

function done() {
	mongoose.connection.close()
}

///////////////////////////////////////////////////
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + url)
})
mongoose.connection.on('error', function(err) {
    console.error('Mongoose connection error: ' + err)
})
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected')
})

process.once('SIGUSR2', function() {
    shutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2')
    })
})
process.on('SIGINT', function() {
    shutdown('app termination', function() {
        process.exit(0)
    })  
})
process.on('SIGTERM', function() {
    shutdown('Heroku app shutdown', function() {
        process.exit(0)
    })
})
function shutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg)
        callback()
    })
}
///////////////////////////////////////////////////

// This is our definition of a Tweet
// Mongoose adds _id field automatically
var tweetSchema = new mongoose.Schema({
	author: String, body: String, timestamp: Date
})

// We have a collection named 'tweets' in the database
var Tweet = mongoose.model('tweet', tweetSchema)

// This module provides one export, the Tweet ODM
module.exports = Tweet

///////////////////////////////////////////////////

