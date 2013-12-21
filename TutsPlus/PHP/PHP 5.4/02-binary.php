<?php


$dec = 25;
$oct = 0031;
$hex = 0x19;

var_dump( $dec );
var_dump( $oct );
var_dump( $hex );
echo PHP_EOL;

//PHP 5.4
$bin = 0b11001;
var_dump( $bin );

echo PHP_EOL;

$bin = 0b11001 | 0b11010;
var_dump( $bin );
