//keydown
//keyup
//keypress (not with Caps Lock, Shift + Key, Alt ...),is primary for User Input

//evt.keyCode -> IE
//evt.charCode -> Standart Browser

// A -> ascii code: 65
// B -> 66
// ...
// Z -> 90
//
// a -> 97
// ...
// z -> 122
//
//  0 -> 48
//  9 -> 57

(function(){




    var txtbox = document.getElementById('txtInput')

    eventUtility.addEvent(txtbox, 'keypress',
        function(evt)
        {
            var code = eventUtility.getCharCode(evt);
            console.log(code);
            if(( code >= 65 && code <= 90 )
                || (code >= 97 && code <= 122) )
            {
                eventUtility.preventDefault(evt);
            }
        }
    );

    //keyDown has same Property, Information as keyUp
    //A or a -> 65
    //Z or z -> 90
    eventUtility.addEvent(document, 'keydown',
        function(evt)
        {
            var code = evt.keyCode;
                // altKey = evt.altKey,
                // shiftKey = evt.shiftKey,
                ctrlKey = evt.ctrlKey;

            console.log(code);
            if( ctrlKey === true && code === 66 )
            {
                console.log('You pressed ctrl+B');
            }

        }
    );
}());