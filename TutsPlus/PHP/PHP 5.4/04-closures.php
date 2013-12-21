<?php
//Closuer in PHP 5.3
class OriginalPhp53
{

    public $iValue = 5;

    public function getFunction()
    {
        $that = $this;
        return function() use ($that)
        {
            return $that->iValue * 5;
        };
    }

}

//Closuer in PHP 5.4
class Original
{

    private $iValue = 5;

    public function getFunction()
    {
        return function()
        {
            return $this->iValue * 5;
        };
    }

}

class BoundPrivate
{
    private $iValue = 10;
}

class BoundPublic
{

    public $iValue = 20;
}

#http://php.net/manual/en/closure.bindto.php
#
$objOne        = new Original();
$oBoundPrivate = new BoundPrivate();
$oBoundPublic  = new BoundPublic();

$fun = $objOne->getFunction();

echo $fun() . PHP_EOL;

$newFun =  $fun->bindTo( $oBoundPublic );
echo $newFun() . PHP_EOL;


// $newFunTwo =  $fun->bindTo( $oBoundPrivate ); #Fehler: $iValue ist private
$newFunTwo =  $fun->bindTo( $oBoundPrivate,  $oBoundPrivate );
// oder
// $newFunTwo =  $fun->bindTo( $oBoundPrivate, 'BoundPrivate' );
echo $newFunTwo() . PHP_EOL;

//Static
$newFun =  Closure::bind( $fun, $oBoundPrivate, $oBoundPrivate );

echo $newFun() . PHP_EOL;


