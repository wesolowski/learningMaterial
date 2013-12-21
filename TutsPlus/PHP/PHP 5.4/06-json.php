<?php
//php 5.3
class PostPHP53
{
    private $sTitle, $oDate;

    public function getTitle()
    {
        return $this->sTitle;
    }

    public function setTitle( $sTitle )
    {
        $this->sTitle = $sTitle;
    }

    public function getDate()
    {
        return $this->oDate;
    }

    public function setDate( $oDate )
    {
        $this->oDate = $oDate;
    }

    public function getArray()
    {
        return [
            'title' => $this->getTitle(),
            'date'  => $this->getDate(),
            'somecode' => [1,2,3]
        ];
    }
}
$oPost = new PostPHP53;
$oPost->setTitle( 'Hello PHP 5.3' );
$oPost->setDate( new DateTime() );


echo json_encode( $oPost->getArray() );
echo PHP_EOL;


//PHP 5.4
class Post implements JsonSerializable
{
    private $sTitle, $oDate;

    public function getTitle()
    {
        return $this->sTitle;
    }

    public function setTitle( $sTitle )
    {
        $this->sTitle = $sTitle;
    }

    public function getDate()
    {
        return $this->oDate;
    }

    public function setDate( $oDate )
    {
        $this->oDate = $oDate;
    }

    public function jsonSerialize()
    {
        return [
            'title' => $this->getTitle(),
            'date'  => $this->getDate(),
            'somecode' => [1,2,3]
        ];
    }
}

$oPost = new Post;
$oPost->setTitle( 'Hello PHP 5.4' );
$oPost->setDate( new DateTime() );

echo json_encode( $oPost, JSON_PRETTY_PRINT );
echo PHP_EOL;