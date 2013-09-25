(function() {

    try
    {
        console.log('This code will not fail');
        osole.log('This code will fail');
        console.log('This will not execute');
    }
    catch( err )
    {
        console.log( 'An error occurred. Please try again later.', err.message );

    }
    finally
    {
        console.log('This is within finally');
    }

}());
