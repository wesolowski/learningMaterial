<?php

class UserDetails extends Observable {
	private $address;

	public function cangeAddress($newAddress) {
		$this->address = $newAddress;
		$this->notify($newAddress);
	}

}

