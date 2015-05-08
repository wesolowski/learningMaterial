<?php

interface DeliveryState {
	public function goNext(Delivery $delivery);
	public function getLocation();
}

