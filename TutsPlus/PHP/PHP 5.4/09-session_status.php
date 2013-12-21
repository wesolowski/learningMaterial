<?php


function state()
{
    $status = session_status();

    switch ($status) {
        case PHP_SESSION_DISABLED:
            echo 'PHP is compiled with -disable-session option';
            break;

        case PHP_SESSION_NONE:
            echo 'No active session';
            break;

        case PHP_SESSION_ACTIVE:
            echo 'Session is active';
            break;
    }
}
session_start();

state();

session_write_close();

echo PHP_EOL;
state();


echo PHP_EOL;