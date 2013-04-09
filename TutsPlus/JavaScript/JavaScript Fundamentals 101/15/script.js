(function() {

    // nr 1
    var speedOne = 500,
        i = 0,
        doSomethingOne = function()
        {
            console.log('doSomethingOne() executed ' + (i+1) + " times");
            i++;
            if( i < 10 )
            {
                setTimeout(doSomethingOne, speedOne);
            }
        };

    setTimeout(doSomethingOne, speedOne);

    console.log('hello');

    // nr 2
    var speedTree = 500,
        i = 0,
        doSomethingTree = function()
        {
            console.log('doSomethingTree() executed ' + (i+1) + " times");
            i++;
            if( i > 9 )
            {
                clearInterval( timeTree );
            }
        };

    var timeTree = setInterval(doSomethingTree, speedTree);

    console.log('hello');


    //---------------------
    //no execute (clearTimeout)

    var speedTwo = 500,
        i = 0,
        doSomethingTwo = function()
        {
            console.log('doSomethingTwo() executed ' + (i+1) + " times");
            i++;
            if( i < 10 )
            {
                setTimeout(doSomethingTwo, speedTwo);
            }
        };

    var timerTwo = setTimeout(doSomethingTwo, speedTwo);
    clearTimeout( timerTwo );


    // animation
    var speed = 10,
        moveBox = function( moveBy )
        {
            var el = document.getElementById('box'),
                left = el.offsetLeft;

            el.style.left = left + moveBy + "px";

            if( (moveBy > 0 && left > 399) || (moveBy < 0 && left < 51) )
            {
                clearTimeout(timer);
                timer = setInterval(
                function() {
                    moveBox(moveBy * -1);
                }, speed);
            }
        };

    var timer = setInterval(
        function() {
            moveBox(3);
        }, speed);

}());

