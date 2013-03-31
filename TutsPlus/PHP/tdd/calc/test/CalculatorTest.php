<?php
require_once substr(__DIR__, 0,-4) . 'src' .DIRECTORY_SEPARATOR . 'Calculator.php';
class CalculatorTest extends PHPUnit_Framework_TestCase
{
	protected $calc;

	public function setUp()
	{
		$this->calc = new Calculator();
	}

	/**
	*	@dataProvider addFixtures
	*/
	public function testAdd($sum, $a, $b)
	{
		$this->assertEquals($sum, $this->calc->add($a,$b));
	}
	#good
	/**
	 * @covers Calculator::sub
	 */
	public function testSub()
	{
		$this->assertEquals(-2, $this->calc->sub(1,3));
	}
	#false
	/**
	 * @covers Calculator::sub
	 */
	public function testMultiply()
	{
		$this->assertEquals(60, $this->calc->multiply(20,3));
	}

	/**
     * @test
	 */
	public function Divide()
	{
		$this->assertEquals(3, $this->calc->divide(12,4));
	}

	/**
	 * @expectedException InvalidArgumentException
	 */
	public function testDivide2()
	{
		$this->assertEquals(3, $this->calc->divide(12,0,true));
	}

	public function addFixtures()
	{
		return array(
			array(4,1,3),
			array(44, 22, 22),
			array(12,1, 11),
		);
	}
}

/**
 * @depends phpunit maual
 */