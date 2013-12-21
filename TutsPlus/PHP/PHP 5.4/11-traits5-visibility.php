<?php

trait Foo
{

    private function sayBar()
    {
        return 'Im saying bar from trait Foo!' . PHP_EOL;
    }

    private function sayFoo()
    {
        return 'Im saying foo from trait Foo!'.  PHP_EOL;
    }

}


class Some
{

    use Foo{
        Foo::sayBar as public;
        Foo::sayFoo as public sayFooFromFoo;
    }

}

$foo = new Some;
echo $foo->sayBar();
echo $foo->sayFooFromFoo();


