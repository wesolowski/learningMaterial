<?php

trait Foo {

    private $sValue = 'Foo';

    public function getFoo()
    {
        return 'Hallo From Trait ' . $this->sValue . PHP_EOL;
    }

}

trait Bar {

    public function getBar()
    {
        return 'Hallo From Trait Bar' . PHP_EOL;
    }

}

class Some {

    use Foo, Bar;

}

$foo = new Some;
echo $foo->getFoo();
echo $foo->getBar();
echo PHP_EOL;
