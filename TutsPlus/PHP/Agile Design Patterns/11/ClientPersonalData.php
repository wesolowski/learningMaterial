<?php

class ClientPersonalData {
	private $streetAddress;
	private $postalCode;
	private $country;

	public function __construct($clienId) {
		// Class will load itself on creation with Active Record
		// or some similar pattern and populate it's private variables
	}

	public function getStreetAddress() {
		return $this->streetAddress;
	}

	public function getPostalCode() {
		return $this->postalCode;
	}

	public function getCountry() {
		return $this->country;
	}
}


