<?php

class PaypalPayment implements PaymentMethod {
	public function getDescription() {
		return "PaypalDescription";
	}

	public function accept(PaymentVisitor $paymentVisitor) {
		$paymentVisitor->visit($this);
	}
}

