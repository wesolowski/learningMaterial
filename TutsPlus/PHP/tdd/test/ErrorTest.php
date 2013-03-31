<?php

class ErrorTest extends PHPUnit_Framework_TestCase
{

    /**
     * @expectedException PHPUnit_Framework
     */
    // public function testError()
    // {
    // Nie idzie!!!
        // new SomeClass;
    // }

    /**
     * @expectedException PHPUnit_Framework_Error_Warning
     */
    public function testWarning()
    {
        include 'some.class.php';
    }

    /**
     * @expectedException PHPUnit_Framework_Error_Notice
     */
    public function testNotice()
    {
        $_GET[SOME_CONSTANCE];
    }

}