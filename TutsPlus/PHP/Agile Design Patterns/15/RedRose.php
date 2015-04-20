<?php
require_once __DIR__ . '/Roses.php';

class RedRose implements Roses {
	private $sold = false;

	public function sell() {
		$this->sold = true;
	}

	public function isSold() {
		return $this->sold;
	}

}
