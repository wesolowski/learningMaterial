<?php
require_once './ShoppingCart.php';

class CartProxy implements Cart {
	private $shoppinCart;

	public function getProducts() {
        // 1.
        // $shoppinCart = new ShoppingCart();
        // return $shoppinCart->getProducts();

        //2.
        // if(is_null($this->shoppinCart))
        // {
        //     $this->shoppingCart = new ShoppingCart();
        // }

		if(is_null($this->shoppinCart))
        {
			$this->shoppingCart = $gateway->getCarts();
        }
		return $this->shoppingCart->getProducts();
	}
}


