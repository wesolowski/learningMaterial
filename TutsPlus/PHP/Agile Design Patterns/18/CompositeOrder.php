<?php

class CompositeOrder implements Order {
	private $orders = array();

	public function add(Order $order) {
		$this->orders[] = $order;
	}

	public function place() {
		aray_walk($this->orders, function ($order) {
			$order->place();
		});
	}

}