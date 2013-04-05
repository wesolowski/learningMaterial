(function() {

    //alert()
    //confirm()
    //prompt() - never

    if( confirm('Do you want to go to Google.com') )
    {
        console.log('google :P');
        location = "http://www.google.com";
    }
    else
    {
        console.log('bing.com :PPPP');
    }

}());

//-----------------------------


// var foo = 'hello, window';

// console.log(window.foo);
// console.log(foo);
// console.log(window);

// var bar = function() {
//     var foo = 'hello, function';
//     console.log(foo);
//     console.log(window.foo);
// };

// bar();

//---------------------------------

(function() {

    var foo = 'hello, window';

    console.log(window.foo); //undefined
    console.log(foo);
    console.log(window);

    var bar = function() {
        var foo = 'hello, function';
        console.log(foo);
        console.log(window.foo); //undefined
    };

    bar();

}());

