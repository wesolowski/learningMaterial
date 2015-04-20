<?php
require_once './UserDetails.php';

class UserUpdater {

	public function updateUserAddress($newAddress) {
		$user = new UserDetails();
		$user->cangeAddress($newAddress);
	}

}

