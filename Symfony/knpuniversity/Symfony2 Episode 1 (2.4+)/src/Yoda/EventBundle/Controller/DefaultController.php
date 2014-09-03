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
            array('name' => $firstName)
        );


        // 2
        // $templating = $this->container->get('templating');

        // return $templating->renderResponse(
        //     'EventBundle:Default:index.html.twig',
        //     array('name' => $firstName)
        // );

        // 1.
        // $content = $templating->renderRespons(
        //     'EventBundle:Default:index.html.twig',
        //     array('name' => $firstName)
        // );

        // return new Response($content);
    }
}
