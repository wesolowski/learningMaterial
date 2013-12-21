<?php
trait Foo
{

}


trait Bar
{

}


class Some
{
    use Foo, Bar;
}

$foo = new Some;



var_dump($foo instanceof Some);

echo PHP_EOL;
var_dump(class_uses($foo));

echo PHP_EOL;
var_dump(in_array('Foo',class_uses($foo)));

echo PHP_EOL;
var_dump(isset(class_uses($foo)['Foo']));

echo PHP_EOL;

