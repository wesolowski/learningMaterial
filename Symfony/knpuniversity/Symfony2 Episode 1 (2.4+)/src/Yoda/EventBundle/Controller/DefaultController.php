<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction($firstName, $count)
    {
        $data = array(
            'count' => $count,
            'firstName' => $firstName,
            'ackbar' => 'It\'s a traaaaap!'
        );

        $json = json_encode($data);

        $response = new Response($json);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
        //2. return new Response('It\'s a traaaaap!');
        //1. return $this->render('EventBundle:Default:index.html.twig', array('name' => $firstName));
    }
}
