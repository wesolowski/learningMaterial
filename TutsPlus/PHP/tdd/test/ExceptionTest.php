<?php

class ExceptionTest extends PHPUnit_Framework_TestCase
{

    /**
     * @expectedException           LogicException
     * @expectedExceptionMessage    foo
     * @expectedExceptionCode       1234
     */
    public function testBasicException()
    {
        //positve
       throw new LogicException('foo', 1234);
    }



    /**
     * @expectedException           FooException
     * @expectedExceptionMessage    bar
     */
    public function testBasicExceptionZero()
    {
        //negative
       throw new LogicException('foo', 1234);
    }




    /**
     * @expectedException           LogicException
     * @expectedExceptionMessage    foo
     * @expectedExceptionCode       9321
     */
    public function testBasicExceptionZeroOne()
    {
        //negative
       throw new LogicException('foo', 1234);
    }

    /**
     * @expectedException LogicException
     * @expectedExceptionMessage bar
     */
    public function testBasicExceptionZeroTow()
    {
        //negative
       throw new LogicException('foo', 1234);
    }

    public function testBasicExceptionOne()
    {
        //positve
        try {
            throw new LogicException('foo', 1234);
        } catch (LogicException $e) {
            $this->assertEquals($e->getMessage(), 'foo');
            $this->assertEquals($e->getCode(), 1234);

        }
    }


    // public function testBasicExceptionTwo()
    // {
    //     //negative
    //     try {
    //         //throw new LogicException('foo', 1234);
    //         $this->fail();
    //     } catch (LogicException $e) {
    //         $this->assertEquals($e->getMessage(), 'foo');
    //         $this->assertEquals($e->getCode(), 1234);

    //     }
    // }
}