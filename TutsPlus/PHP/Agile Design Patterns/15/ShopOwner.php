<?php
require_once __DIR__ . '/RedRose.php';

class ShopOwner {
	private $rose;

	public function __construct(Roses $rose) {
		$this->rose = $rose;
	}

	public function sell() {
		$this->rose->sell();
	}

}

