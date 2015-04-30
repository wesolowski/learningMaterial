<?php

class CreditPaymentMethod extends PaymentMethod {

	public function approve() {
		parent::approveImp();
	}

	public function send() {
		parent::sendImp();
	}

}

