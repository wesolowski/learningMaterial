<?php

class MultiFileUploader {
	private $uploaders = array();

	public function addUPloader(UploaderCommand $uploader) {
		$this->uploaders[] = $uploader;
	}

	public function run() {
		while (!empty($this->uploaders)) {
			$uploader = array_shift($this->uploaders);
			$uploader->execute();
		}
	}

}


