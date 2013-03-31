<?php
class Commend {

    const VERSION = '0.0.1';

    public function printVersion()
    {
        print 'Version is ' . self::VERSION;
    }
}


class OutputTest extends PHPUnit_Framework_TestCase
{


    public function testOutputHello()
    {
        $this->expectOutputString('Version is 0.0.1');

        $oCommad = new Commend();
        $oCommad->printVersion();

    }


    public function testOutputHelloRegExp()
    {
        $this->expectOutputRegex('/Version is/');

        $oCommad = new Commend();
        $oCommad->printVersion();

    }

    public function testOutputHelloTwo()
    {
        ob_start();
        $oCommad = new Commend();
        $oCommad->printVersion();
        $txt = ob_get_clean();
        $this->assertEquals('Version is 0.0.1', $txt);
    }
}