<?php

class CreditBuyer {
	public function payNOw(CreditPayment $payment) {
		if($payment->approve())
			$payment->send();
	}
}
