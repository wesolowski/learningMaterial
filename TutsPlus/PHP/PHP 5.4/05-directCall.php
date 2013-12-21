<?php
//PHP < 5.3
$date = new DateTime;
echo $date->format('Y-m-d') . PHP_EOL;

//PHP 5.4
echo (new DateTime())->format('Y-m-d');

echo PHP_EOL;

//----------------------
echo (new DateTime())->add(new DateInterval('P3D'))->format('Y-m-d');

echo PHP_EOL;


class Some
{
    protected $aTest = array(
        1 => 'Hallo',
        2 => 'Test'
    );

    public function getArray()
    {
        return $this->aTest;
    }
}

echo (new Some)->getArray()[1];

echo PHP_EOL;