<?php

class FileSystem
{
    protected $sPath;

    /**
     * Class constructor
     *
     * @author Rafal Wesolowski <wesolowski@nexus-netsoft.com>
     * @return void
     */
    public function __construct($sPath)
    {
        $this->sPath = $sPath;
    }

    public function write($sMessage)
    {
        $sMessage = sprintf("%s : %s\n", date('r', 0), $sMessage);
        file_put_contents($this->sPath, $sMessage, FILE_APPEND);
    }


}