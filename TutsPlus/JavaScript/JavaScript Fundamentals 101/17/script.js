(function() {

var buttons = document.getElementsByTagName("a");

var buttonClick = function()
{
    var className = this.innerHTML.toLowerCase();
    document.body.className = className;

}

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    // buttons[i].onclick = function() {
    //     var className = this.innerHTML.toLowerCase();

    //     document.body.className = className;
    // };

    buttons[i].addEventListener('click', buttonClick, false); // 3param :
                                                            // false is Bubbling (works in IE8),
                                                             // true is Capturing() don´t works in IE8
    buttons[i].addEventListener('click', function() { console.log('Hi!');}, false);

    buttons[i].removeEventListener('click', buttonClick, false);
    buttons[i].removeEventListener('click', function() { console.log('Hi!');}, false);  // Don´t works. Not the same Function. See-> buttonClick


    buttons[i].addEventListener("click", function(evt) {
        var className = this.innerHTML.toLowerCase();

        evt.preventDefault();
        console.log('type',evt.type);
        console.log('target',evt.target);
        console.log('this',this);

        document.body.className = className;
    }, false);

}

}());



