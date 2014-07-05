<?php

namespace Acme\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {
        $aUser = array( 'name' => 'Tom', 'active' => true );
        return $this->render('AcmeDemoBundle:Main:index.html.twig', array( 'user' => $aUser));
    }

}

//url http://laravel.dev/web/app_dev.php/index
