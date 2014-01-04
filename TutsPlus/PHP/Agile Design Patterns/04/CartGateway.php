<?php

interface CartGateway {
	public function persist(ShoppingCart $cart);
	public function retrieve($id);
	public function getIdOfRecordedCart();
}


