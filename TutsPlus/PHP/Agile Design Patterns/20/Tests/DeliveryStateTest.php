<?php
require_once '../Delivery.php';
require_once '../Processing.php';

class DeliveryStateTest extends PHPUnit_Framework_TestCase {

	public function testItCanCreateADEliveryWithInitialState() {
		$delivery = new Delivery(new Processing());
		$this->assertEquals('Warehouse', $delivery->getCurrentLocation());
	}

	public function testItCanGoFromProcessingToOnRoute() {
		$delivery = new Delivery(new Processing());
		$delivery->goNext();

		$this->assertEquals('On the train', $delivery->getCurrentLocation());
	}

	public function testItCanGoFromOnRouteToDestination() {
		$delivery = new Delivery(new OnRoute());
		$delivery->goNext();

		$this->assertEquals('Final Destination', $delivery->getCurrentLocation());
	}

	public function testItRemainsAtFinalDestination() {
		$delivery = new Delivery(new AtDestination());
		$delivery->goNext();

		$this->assertEquals('Final Destination', $delivery->getCurrentLocation());
	}


}

?>
