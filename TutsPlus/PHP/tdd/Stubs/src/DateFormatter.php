<?php 

class DateFormatter
{

	protected $config;

	public function __construct(Config $config)
	{
		$this->config = $config;
	}

	public function getFormattedDate($timestamp)
	{
		return date($this->config->get('date.format'), $timestamp);
	}

}