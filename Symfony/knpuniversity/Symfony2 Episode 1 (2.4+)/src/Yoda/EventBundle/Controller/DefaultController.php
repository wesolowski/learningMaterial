<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction($firstName, $count)
    {
        return $this->render(
            'EventBundle:Default:index.html.twig',
            array('name' => $firstName, 'count' => $count)
        );
    }
}
