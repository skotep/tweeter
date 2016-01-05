// This module defines the view-model aka controller
module.exports = getController

// model representation of a Tweet
function Tweet(data) {
	this.body = m.prop(data.body)
	this.author = m.prop(data.author)
	this.timestamp = m.prop(data.timestamp)
}

function getController() {	

	var vm = { 
		tweets: []
	}

	return vm
}
