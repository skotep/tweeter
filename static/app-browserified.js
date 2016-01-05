(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function() {
     var view = require('./view.js')
     var ctrl = require('./controller.js')
     m.mount(document.getElementById('app'), { controller: ctrl, view: view })
})();

},{"./controller.js":2,"./view.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
/** @jsx m */

// this module defines the view
// the view is provided access to the view-model, named vm
module.exports = function(vm) {

var navbar = 
    {tag: "div", attrs: {class:"container-fluid"}, children: [
        {tag: "a", attrs: {class:"navbar-brand", href:"#"}, children: [
            {tag: "img", attrs: {class:"owl-icon", src:"./Rice_Owl_tiny.png"}}
        ]}, 
        {tag: "a", attrs: {class:"navbar-brand blue-text", href:"#"}, children: [
            "Tweeter"
        ]}
    ]}

///////////////////////////////////////////////////////////////////////////
return {tag: "div", attrs: {}, children: [
    {tag: "nav", attrs: {class:"navbar navbar-default navbar-static-top"}, children: [
         navbar 
    ]}
]}

}



},{}]},{},[1,2,3]);
