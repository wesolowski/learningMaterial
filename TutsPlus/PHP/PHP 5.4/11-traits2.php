<?php
# 1. private var in trait und class
# 2. insteadof
# 3. alias (as)
# 4. private Fun in Trails
# 5. Class_uses

trait Foo
{


    private function sayFoo()
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


}


class Some
{


    use Foo, Bar{
        Foo::sayFoo as public sayFooFromFoo;
    }

    protected $property = 'Hello';

    public function getProperty()
    {
        return $this->property;
    }

}

$foo = new Some;
// echo $foo->sayFooFromFoo();
// echo $foo->sayBar();



var_dump($foo instanceof Some);
echo PHP_EOL;
var_dump(class_uses($foo));
echo PHP_EOL;
var_dump(in_array('Foo',class_uses($foo)));
echo PHP_EOL;
var_dump(isset(class_uses($foo)['Foo']));
echo PHP_EOL;

