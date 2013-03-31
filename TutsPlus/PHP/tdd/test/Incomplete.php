<?php

class IncompleteTest extends PHPUnit_Framework_TestCase
{

    public function testSomethingThatDontExistsNow()
    {
        $this->markTestIncomplete('Waiting for implemetation');
    }

    public function testSomethingOptional()
    {
        if(!extension_loaded('libevent'))
        {
            $this->markTestSkipped('Instal lib event');
        }
    }
}