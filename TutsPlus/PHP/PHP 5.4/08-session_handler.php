<?php
#http://php.net/session_set_save_handler
#http://www.php.net/manual/en/class.sessionhandler.php


//PHP 5.3
class SessionSaveHandlerPHP53
{
    protected $savePath;
    protected $sessionName;


    public function open($savePath, $sessionName)
    {
        $this->savePath = $savePath;
        $this->sessionName = $sessionName;
        return true;
    }

    public function close()
    {
        // your code if any
        return true;
    }

    public function read($id)
    {
        // your code
    }

    public function write($id, $data)
    {
        // your code
    }

    public function destroy($id)
    {
        // your code
    }

    public function gc($maxlifetime)
    {
        // your code
    }
}

$ses = new SessionSaveHandlerPHP53();

session_set_save_handler([$ses, 'open'], [$ses, 'close']....);

//PHP 5.4

class SessionSaveHandler implements SessionHandlerInterface
{
    protected $savePath;
    protected $sessionName;


    public function open($savePath, $sessionName)
    {
        $this->savePath = $savePath;
        $this->sessionName = $sessionName;
        return true;
    }

    public function close()
    {
        // your code if any
        return true;
    }

    public function read($id)
    {
        // your code
    }

    public function write($id, $data)
    {
        // your code
    }

    public function destroy($id)
    {
        // your code
    }

    public function gc($maxlifetime)
    {
        // your code
    }
}
$ses = new SessionSaveHandler();
session_set_save_handler( $ses );
