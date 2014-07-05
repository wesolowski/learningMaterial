<?php

namespace Test\IntroBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('StartBundle:Default:index.html.twig', array('name' => $name ));
    }
}
