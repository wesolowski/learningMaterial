<?php


class AnotherClass{

    public function getFunctionOne()
    {
         return 'Im saying "getFunctionOne" from Class: AnotherClass!' . PHP_EOL;
    }

    public function getFunctionTwo()
    {
         return 'Im saying "getFunctionTwo" from Class: AnotherClass!' . PHP_EOL;
    }

    public function getFunctionThree()
    {
         return 'Im saying "getFunctionThree" from Class: AnotherClass!' . PHP_EOL;
    }
}

trait Foo {

    public function getFunctionOne()
    {
         return 'Im saying "getFunctionOne" from trait Foo!' . PHP_EOL;
    }

    public function getFunctionTwo()
    {
         return 'Im saying "getFunctionTwo" from trait Foo!' . PHP_EOL;
    }
}


class Some extends AnotherClass{

    use Foo;

    public function getFunctionOne()
    {
         return 'Im saying "getFunctionOne" from Class: Some!' . PHP_EOL;
    }

}

$foo = new Some;
echo $foo->getFunctionOne();
echo $foo->getFunctionTwo();
echo $foo->getFunctionThree();
echo PHP_EOL;
