<?php
//PHP 5.3 or lower
$aData = array(
    'key'     => 'value',
    'another' => 'another value',
    'numbers' => array( 1, 2, 3 )
);

var_dump( $aData );

//PHP 5.4
$aData = [
    'key'     => 'value',
    'another' => 'another value',
    'numbers' => [ 1, 2, 3 ]
];

var_dump( $aData );


//Tips
$oObj =(object) [
        'key' => 'javascript'
    ];
var_dump($oObj);


