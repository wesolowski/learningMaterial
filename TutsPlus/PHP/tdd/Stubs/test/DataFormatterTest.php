<?php 
require_once substr(__DIR__, 0,-4) . 'src' .DIRECTORY_SEPARATOR . 'DateFormatter.php';
require_once substr(__DIR__, 0,-4) . 'src' .DIRECTORY_SEPARATOR . 'Config.php';

class DateFormatterTest extends PHPUnit_Framework_TestCase
{
	#1
	public function testFormattingDatesBasedOnCOnfig()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->returnValue('c'));

		$formatter = new DateFormatter($stub);
		$this->assertEquals($formatter->getFormattedDate(0), '1970-01-01T00:00:00+00:00');
	}

	public function testFormattingDatesBasedOnCOnfigTwo()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->with('date.format')
			  ->will($this->returnValue('c'));

		$formatter = new DateFormatter($stub);
		$this->assertEquals($formatter->getFormattedDate(0), '1970-01-01T00:00:00+00:00');
	}



	public function testFormattingDatesBasedOnCOnfigTwoSelf()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->returnSelf('c'));

		$this->assertSame($stub, $stub->get());

	}

	public function testFormattingDatesBasedOnCOnfigTwoSelf3()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->returnArgument(2));

		$this->assertEquals($stub->get(1, 4, 5), 5);
	}

	public function testFormattingDatesBasedOnCOnfigTwoSelf4()
	{
		$map = array(
			array(1,2,3,3),
			array('foo', 'bar', 'some', 'some')
		);

		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->returnValueMap($map));

		$this->assertEquals($stub->get(1, 2, 3), 3);
		$this->assertEquals($stub->get('foo', 'bar', 'some'), 'some');
	}

	public function testFormattingDatesBasedOnCOnfigTwoSelf5()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->returnCallback(function($arg) {
			  	return $arg + 5;
			  }));

		$this->assertEquals($stub->get(2), 7);
	}

	public function testFormattingDatesBasedOnCOnfigTwoSelf6()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->onConsecutiveCalls('foo', 'bar', 123));

		$this->assertEquals($stub->get(), 'foo');
		$this->assertEquals($stub->get(), 'bar');
		$this->assertEquals($stub->get(), 123);
	}

	/**
	 * @expectedException RangeException
	 */
	public function testFormattingDatesBasedOnCOnfigTwoSelf7()
	{
		$stub = $this->getMock("COnfig");
		$stub->expects($this->any())
			  ->method('get')
			  ->will($this->throwException(new RangeException())
			   );

		$stub->get();
	}

	// #2
	// public function testFormattingDatesBasedOnCOnfigTwoSelf8()
	// {
	// 	$stub = $this->getMock("Config", null, array(1,2), 'MyHiperClass', false, false, false);
	// 	$stub = $this->getMockBilder('Config')
	// 				 ->disableAutoload()
	// 				 ->setMethodes(array('get'))
	// 				 ->setMockClassName('MyHiperClass')
	// 				 ->getMock();
	// 	var_dump($stub->get());
	// 	var_dump($stub->getSome());
	// 	var_dump($stub);
	// }






}

