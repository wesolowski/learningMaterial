(function() {
    var value = 2 * 2 * 2;
    console.log( value ); //8

    function toThePower (num, exp)
    {
        var value = num;

        for (var i = 1; i < exp; i++)
        {
            value *= num;
        };
        return value;
    }

    var value2 =  toThePower(2,3);
    console.log( value2 );

    var value3 = Math.pow( 2,3 );
    console.log( value3 );

    var value4 = Math.sqrt( 9 );
    console.log( value4 );

    var value5 = Math.round( 9.13 );
    console.log( value5 );

    var value6 = Math.round( 9.53 );
    console.log( value6 );

    var value7 = Math.ceil( 9.03 );
    console.log( value7 );

    var value8 = Math.floor( 9.99 );
    console.log( value8 );

    var value9 = Math.max( 20, 6, 10, 12, 75, 3 );
    console.log( value9 );

    var value10 = Math.min( 20, 6, 10, 12, 75, 3 );
    console.log( value10 );

    var value11 = Math.min( 20, 6, 10, 12, 75, 3.01, 3.02 );
    console.log( value11 );

    var value12 = Math.abs( 7 );
    console.log( value12 );

    var value13 = Math.sin( 30 );
    console.log( value13 );

    var value14 = Math.cos( 30 );
    console.log( value14 );

    var value15 = Math.random();
    console.log( value15 );

    var value16 = Math.floor( Math.random() * 11 );
    console.log( value16 );

    var value17 = Math.floor( Math.random() * 101 );
    console.log( value17 );

    var value18 = Math.PI;
    console.log( value18 );

    var value19 = Math.SQRT2;
    console.log( value19 );

    var value20 = Math.SQRT1_2;
    console.log( value20 );




}());

