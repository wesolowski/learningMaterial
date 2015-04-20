<?php

class YellowRose implements Roses {
	private $sold = false;

	public function sell() {
		$this->sold = true;
	}

	public function isSold() {
		return $this->sold;
	}
}

