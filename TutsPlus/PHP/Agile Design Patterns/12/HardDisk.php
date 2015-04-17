<?php
require_once __DIR__ . '/ProductSubject.php';

class HardDisk extends ProductSubject {

	private $price;

	public function setPrice($price) {
		$this->price = $price;
		$this->notify();
	}

	public function getPrice() {
		return $this->price;
	}
}
