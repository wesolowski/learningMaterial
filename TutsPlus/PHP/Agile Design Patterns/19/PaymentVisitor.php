<?php

interface PaymentVisitor {
	public function visit(PaymentMethod $paymentMethod);
	public function getDescription();
}

