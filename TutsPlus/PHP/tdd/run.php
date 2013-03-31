<?php

file_put_contents('php://memory', 'some_data');
var_dump(file_get_contents('php://memory'));

$handle = fopen('php://memory', 'a+');
fwrite($handle, 'some data two');
fseek($handle, 0);
var_dump(fread($handle, 1024));
fcolse($handle);