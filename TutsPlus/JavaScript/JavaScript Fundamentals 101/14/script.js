(function() {

	var divFoo = document.getElementById("foo"),
        style = divFoo.style;

	style.color = 'red';
	style.border = '2px solid pink';

    divFoo.className = ' css-class  css-class2 ';
    //divFoo.className = '';//remove Class
    divFoo.className = divFoo.className.replace( ' css-class2 ', '');//remove OneClass

    //add, toggle and removeClass (not support in IE 8 or lower)
    divFoo.classList.add( 'css-class2' );
    divFoo.classList.remove( 'css-class2' );
    divFoo.classList.toggle( 'css-class2' );

    // not support in IE 8 or lower
    // var color = window.getComputedStyle( divFoo, null ).getPropertyValue('color');
    // console.log(color);

    //support in IE 8 or lower
    // var color2 = divFoo.currentStyle['color'];
    // console.log(color2);


    var getStyle = function(el, cssProperty)
    {
        if(typeof getComputedStyle !== 'undefined')
        {
            return window.getComputedStyle(el,null).getPropertyValue(cssProperty);
        }
        else //support in IE 8 or lower
        {
            return el.currentStyle[cssProperty];
        }
    };

    var color = getStyle( divFoo, 'color' );
    console.log(color);
}());

