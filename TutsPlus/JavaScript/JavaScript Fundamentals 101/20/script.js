(function() {

var mouseHandler = function( evt )
{
    var target = eventUtility.getTarget( evt ),
        className = target.getAttribute('data-body-class');

    if( className )
    {
        eventUtility.preventDefault( evt );

        if( evt.type === 'click' )
        {
            document.body.className = '';
        }
        else
        {
            document.body.className = className;
        }
    }
}

eventUtility.addEvent(document, "click", mouseHandler);
eventUtility.addEvent(document, "mouseover", mouseHandler);

// eventUtility.addEvent( document, "click", function(evt)
// {
//     console.log('You clicked me');
// });

// eventUtility.addEvent( document, "click", function(evt)
// {
//     var target = eventUtility.getTarget( evt ),
//         className = target.getAttribute('data-body-class');

//     if( className )
//     {
//         document.body.className = className;
//         eventUtility.preventDefault( evt );
//     }
// });



// eventUtility.addEvent( document, "mouseover", function(evt)
// {
//     var target = eventUtility.getTarget( evt ),
//         className = target.getAttribute('data-body-class');

//     if( className )
//     {
//         document.body.className = className;
//         eventUtility.preventDefault( evt );
//     }
// });



// var mouseHandler = function(evt) {
//     var target = eventUtility.getTarget(evt),
//         classData = target.getAttribute("data-body-class");

//     if (classData) {
//         eventUtility.preventDefault(evt);

//         if (evt.type === "click") {
//             document.body.className = "";
//         } else {
//             document.body.className = classData;
//         }
//     }
// };

// eventUtility.addEvent(document, "click", mouseHandler);
// eventUtility.addEvent(document, "mouseover", mouseHandler);

/*var buttons = document.getElementsByTagName("a");

var buttonClick = function(evt) {
    var target = eventUtility.getTarget(evt),
        className = target.innerHTML.toLowerCase();

    eventUtility.preventDefault(evt);

    document.body.className = className;
};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    eventUtility.addEvent(buttons[i], "click", buttonClick);
    //removeEvent(buttons[i], "click", buttonClick);

}*/

}());

