(function() {

    var date = new Date();
    console.log( date );


    var date = new Date( 1997, 0, 1);
    console.log( date );

    var date = new Date( 1997, 0, 1, 22, 5, 30, 15);
    console.log( date );

    var date = new Date( 1997, 0, 1, 22, 5, 30, 15);
    console.log( date );

    var date = new Date( 865770700000 );
    console.log( date );
    console.log( date.getFullYear() );
    console.log( date.getMonth() );

    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    console.log( months[date.getMonth()] );

    console.log( date.getDate());
    console.log( date.getDay());
    console.log( date.getHours());
    console.log( date.getMinutes());
    console.log( date.getSeconds());
    console.log( date.getMilliseconds());

    console.log( date.getTime() );
    console.log( date.getTimezoneOffset()); //min
    console.log( date.getTimezoneOffset() / 60 ); // hours

    date.setMonth( 3 );
    date.setMonth( date.getMonth() - 1 );
    date.setFullYear( date.getFullYear() - 1 );

    console.log( date );

    var date = new Date( 1997, 0, 1);
    date.setMonth( date.getMonth() - 1 );
    console.log( date );


    var date = new Date( 1997, 0, 1),
        date2 = new Date( 1998, 0, 1);

    if( date < date2 )
    {
        console.log('date is less than date2');
    }
    else
    {
        console.log('date is not less than date2');
    }



    var date = new Date( 1997, 0, 1),
        date2 = new Date( 1997, 0, 1);

    if( date.getTime() === date2.getTime() )
    {
        console.log('date is equal to date2');
    }
    else
    {
        console.log('date is not equal than date2');
    }









}());

