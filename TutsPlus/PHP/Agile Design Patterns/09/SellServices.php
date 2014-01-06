<?php
require_once 'Sell.php';

class SellServices extends Sell {
	private $price;
	private $humanResources;

	public function markHumanResourcesAsOccupied() {
		$this->humanResources->mark(2);
	}

}


