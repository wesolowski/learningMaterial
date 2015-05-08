<?php
require_once 'PaymentDecorator.php';

class HtmlPaymentDetails extends PaymentDecorator {

	public function getHtmlDescription() {
		return '<html>'.$this->itsPaymentMethod->getDescription() . '</html>';
	}

}
