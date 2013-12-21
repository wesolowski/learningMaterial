<?php

trait Foo {

    public function getFoo()
    {
        return 'Hallo From Trait Foo' . PHP_EOL;
    }

}

trait Bar {

    public function getBar()
    {
        return 'Hallo From Trait Bar' . PHP_EOL;
    }

}

trait FooBar{

    use Foo,Bar;

}

class Some {

    use FooBar;

}

$foo = new Some;
echo $foo->getFoo();
echo $foo->getBar();
echo PHP_EOL;
