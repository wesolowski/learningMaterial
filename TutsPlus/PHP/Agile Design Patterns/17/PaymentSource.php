<?php

interface PaymentSource {
	public function approve();
	public function send();
}

