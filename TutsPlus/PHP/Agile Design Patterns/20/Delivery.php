<?php

class Delivery {
	private $currentState;

	public function __construct(DeliveryState $state) {
		$this->setState($state);
	}

	public function getCurrentLocation() {
		return $this->currentState->getLocation();
	}

	public function goNext() {
		$this->currentState->goNext($this);
	}

	public function setState(DeliveryState $state) {
		$this->currentState = $state;
	}
}


