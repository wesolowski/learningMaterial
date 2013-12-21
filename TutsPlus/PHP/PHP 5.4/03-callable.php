<?php

function sameFunction()
{
    echo 'Hello World';
}

class Some
{
    public static function methodStatic(){}
    public function method(){}
}



function call( callable $param )
{

}

call( 'sameFunction' );
call( 'strpos' );
call( function(){} );
call( 'Some::methodStatic' );
call( ['Some','methodStatic'] );
call( [new Some,'method'] );

//Fehler
//call( 'funtionTest' );
