//Onclick is Dom Lever 0 event handlers
(function() {
    //window.onload = when we script.js put in head-Tag
    //we have to wait when dom is finishes loading
    window.onload = function() {

        var el =document.getElementById('box');

        el.onclick = function() {
            this.style.backgroundColor = 'red';
        }

    };

var buttons = document.getElementsByTagName("button");
for (var i = 0, len = buttons.length; i < len; i++) {

    button[i].onclick = function(){
        console.log('nerver show')
    };

    buttons[i].onclick = function(){
        var className = this.innerHTML.toLowerCase();

        document.body.className = className;
    };


};

}());

