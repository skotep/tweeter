;(function() {
     var view = require('./view.js')
     var ctrl = require('./controller.js')
     m.mount(document.getElementById('app'), { controller: ctrl, view: view })
})();
