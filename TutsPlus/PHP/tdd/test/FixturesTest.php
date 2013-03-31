<?php

class FixturesTest extends PHPUnit_Framework_TestCase
{

    protected $aData;


    public static function setUpBeforeClass()
    {
        echo 'once at the beginning';
    }

    public function setUp()
    {
        echo 'start' . PHP_EOL;
        $this->aData = array(1,2,3);
    }

    public function testPushingToArray()
    {
        array_push($this->aData, 5);

        $this->assertCount(4, $this->aData);
        $this->assertContains(1, $this->aData);
        $this->assertContains(2, $this->aData);
        $this->assertContains(3, $this->aData);
        $this->assertContains(5, $this->aData);
    }

    public function testPopFromArray()
    {
        array_pop($this->aData);

        $this->assertCount(2, $this->aData);
        $this->assertContains(1, $this->aData);
        $this->assertContains(2, $this->aData);
        $this->assertNotContains(3, $this->aData);
    }

    public function testShiftFromArray()
    {
        array_shift($this->aData);

        $this->assertCount(2, $this->aData);
        $this->assertContains(2, $this->aData);
        $this->assertContains(3, $this->aData);
        $this->assertNotContains(1, $this->aData);
    }

    public function tearDown()
    {
        echo 'end' . PHP_EOL;
    }

    public static function tearDownAfterClass()
    {
        echo 'once at the end';
    }
}