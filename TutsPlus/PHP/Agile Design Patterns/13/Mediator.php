<?php
require_once './Observable.php';
require_once './UserAddress.php';

class Mediator {

	private $observedClass;
	private $affectedClass;

	public function __construct(Observable $observedClass, UserAddress $affectedClass) {
		$this->observedClass = $observedClass;
		$this->affectedClass = $affectedClass;
		$observedClass->register($this);
	}

	public function update($address) {
		$this->affectedClass->setAddress($address);
	}
}
