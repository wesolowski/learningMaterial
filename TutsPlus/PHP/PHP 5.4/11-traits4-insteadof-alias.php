<?php

trait Foo
{

    public function sayFoo()
    {
        return 'Im saying foo from trait Foo!'.  PHP_EOL;
    }

    public function sayBar()
    {
        return 'Im saying bar from trait Foo!' . PHP_EOL;
    }

}

trait Bar
{

    public function sayFoo()
    {
        return 'Im saying foo from trait Bar!'.  PHP_EOL;
    }

    public function sayBar()
    {
        return 'Im saying bar from trait Bar!' . PHP_EOL;
    }

}


class Some
{
    use Foo, Bar{
        Bar::sayFoo insteadof Foo;
        Foo::sayBar insteadof Bar;
        Foo::sayBar as sayFooFromFoo;
    }

}

$foo = new Some;
echo $foo->sayBar();
echo $foo->sayFoo();
echo $foo->sayFooFromFoo();


