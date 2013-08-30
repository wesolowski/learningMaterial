(function() {

var buttons = document.getElementsByTagName("a");

var buttonClick = function(evt) {
        var className = event.srcElement.innerHTML.toLowerCase();
        
        event.returnValue = false;
        
        document.body.className = className;
        };

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    /*buttons[i].onclick = function() {
        var className = this.innerHTML.toLowerCase();
        
        document.body.className = className;
    };*/
    
    buttons[i].attachEvent("onclick", buttonClick); 
    buttons[i].detachEvent("onclick", buttonClick);    
    
}

}());

