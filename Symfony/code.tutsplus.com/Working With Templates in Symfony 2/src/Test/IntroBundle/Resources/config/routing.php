<?php

use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Route;

$collection = new RouteCollection();

$collection->add('start_homepage', new Route('/hello/{name}', array(
    '_controller' => 'StartBundle:Default:index',
)));

return $collection;
