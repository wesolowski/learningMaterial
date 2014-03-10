<?php


class Rest
{
    protected $sRequestMethod = null;

    protected $aUrlParams = array();

    protected $aRestInfo = array(
        'GET' => 'getAll',
        'POST' => 'getById',
        'PUT' => 'destroy',
        'DELETE' => 'save',
    );

    /*
     * Class constructor
     *
     * @author Rafal Wesolowski <wesolyy@gmail.com>
     */
    public function __construct()
    {
        $this->sRequestMethod = $_SERVER['REQUEST_METHOD'];
        $aUrlInfo = explode(
                    '/',
                    trim(substr($_SERVER['REQUEST_URI'], 5), '/' )
        );
        $this->aUrlParams['class'] = trim( array_shift($aUrlInfo), '?' );
        $this->aUrlParams['params'] = (array) $aUrlInfo;
    }

    public function getInfo()
    {
        $sClassName = ucfirst($this->aUrlParams['class']);
        $oClass = new $sClassName();
        $sMethodName = $this->aRestInfo[$this->sRequestMethod];
        $aInfo = $oClass->$sMethodName( $this->aUrlParams['params'] );
        return $this->_formatToJson( $aInfo );
    }


    protected function _formatToJson(array $aInfo )
    {
        return json_encode($aInfo);
    }

}


class Contacts
{
    protected $aDbInfo = array(
        array(
            '__v' => 0,
            'id' => 0,
            'added' => '2013-01-25T21:29:41.9642',
            'email' => 'wesoly@gmail.com',
            'name' => array(
                'clean' => 'rafal-wesolowski',
                'first' => 'Rafal',
                'last' => 'Wesolowski'
            ),
            'number' => 1234567890,
        ),
        array(
            '__v' => 1,
            'id' => 1,
            'added' => '2013-01-25T21:29:41.9642',
            'email' => 'doe@gmail.com',
            'name' => array(
                'clean' => 'john-doe',
                'first' => 'John',
                'last' => 'Doe'
            ),
            'number' => 9876543210,
        ),
    );

    public function getAll( array $aParams )
    {
        if( !empty($aParams) )
        {
            $aInfo = $this->aDbInfo[current($aParams)];
        }
        else
        {
            $aInfo = $this->aDbInfo;
        }

        return $aInfo;
    }

    public function getById($iId)
    {

    }

    public function destroy($iId)
    {

    }

    public function save($iId = null)
    {

    }


}

$oRest = new Rest();
echo $oRest->getInfo();