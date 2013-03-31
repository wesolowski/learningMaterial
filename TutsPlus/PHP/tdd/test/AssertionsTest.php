<?php

class AssertionsTest extends PHPUnit_Framework_TestCase
{

    public function testBasicAssertion()
    {
        // $this->assertTrue(1 + 5 === 7, '1 + 5 is 6');
        // $this->assertEquals(1 + 5, 6);
        // $this->assertInstanceOf('DateTime', new DateTime());
        // $this->assertInstanceOf('DateTimeZone', new DateTime());
        // $this->assertNotInstanceOf('DateTimeZone', new DateTime());
        // $this->assertNotInstanceOf('DateTime', new DateTime());

        // $arr = array();
        // $this->assertCount(0, $arr);
        // $arr[] = 2;
        // $this->assertCount(1, $arr);
        // $arr[] = 2;
        // $this->assertCount(2, $arr);

        $arr = array();
        $this->assertCount(0, $arr);

        $arr[] = 2;
        $this->assertCount(1, $arr);
        $this->assertContains(2, $arr);



        $arr[] = 12;
        $arr[] = 32;
        $this->assertCount(3, $arr);
        $this->assertNotContains(243, $arr);

        $this->assertEquals(array(2,12), $arr);

    }

}