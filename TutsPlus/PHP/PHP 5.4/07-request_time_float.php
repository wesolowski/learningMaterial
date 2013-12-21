<?php

//PHP 5.4
echo 'Starting complicated calculations.' . PHP_EOL;
sleep(1);
echo 'Calculations ended. It took:' . (microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) . PHP_EOL;


//PHP 5.3
$start = microtime(true);
echo 'Starting complicated calculations.' . PHP_EOL;
sleep(1);
echo 'Calculations ended. It took:' . (microtime(true) - $start) . PHP_EOL;


