<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction($firstName, $count)
    {
        // $em = $this->container->get('doctrine')->getManager();
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('EventBundle:Event');

        $event = $repo->findOneBy( array(
            'name' => 'Darth\'s surprise birthday party!'
        ));

        return $this->render(
            'EventBundle:Default:index.html.twig',
            array('name' => $firstName, 'count' => $count, 'event' => $event)
        );
    }
}
