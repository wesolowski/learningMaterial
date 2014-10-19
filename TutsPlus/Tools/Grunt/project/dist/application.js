/* Rafal Wesolowski 2014 */
var MyModule = (function() {

    function sayHi (name) {
        return "Hi, " + name + "!";
    }

    return {
        sayHi: sayHi
    };
}());

var exports = {};
function h1(text) {
    return "<h1>" + text + "</h1>";
}

function a() {
    return 1 === 1;
}

exports.h1 = h1;