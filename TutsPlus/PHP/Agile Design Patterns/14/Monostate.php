<?php

class Monostate {
	private static $value; // Static value

	public function setValue($value) { // Dynamic function
		self::$value = $value; // Static value
	}

	public function getValue() { // Dynamic function
		return self::$value; // Static value
	}
}

