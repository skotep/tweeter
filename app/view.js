/** @jsx m */

// this module defines the view
// the view is provided access to the view-model, named vm
module.exports = function(vm) {

var navbar = 
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img class="owl-icon" src="./Rice_Owl_tiny.png"></img>
        </a>
        <a class="navbar-brand blue-text" href="#">
            Tweeter
        </a>
    </div>

///////////////////////////////////////////////////////////////////////////
return <div>
    <nav class="navbar navbar-default navbar-static-top">
        { navbar }
    </nav>
</div>

}


