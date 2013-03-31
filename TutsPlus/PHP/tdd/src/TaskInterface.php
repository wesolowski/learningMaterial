<?php

interface TaskInterface
{
    //#1
    //public function execute(array $options);

	//#2
    public function execute(array $options, $order);
}