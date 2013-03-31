<?php
class Calculator
{
	/**
	 * @assert(1,3) == 4
	 */
	public function add($a, $b)
	{
		return $a + $b;
	}


	public function sub($a, $b)
	{
		return $a - $b;
	}

	/**
	 * @codeCoverageIgnore
	 */
	public function multiply($a, $b)
	{
		// @codeCoverageIgnoreStart
		$aTest = 'test';
		// @codeCoverageIgnoreEnd

		return $a * $b;
	}

	public function divide($a, $b, $throwExceptionOnZero = false)
	{
		if($throwExceptionOnZero && $b === 0 )
		{
			throw new InvalidArgumentException('Cant divide by 0');

		}
		return $a / $b;
	}


}