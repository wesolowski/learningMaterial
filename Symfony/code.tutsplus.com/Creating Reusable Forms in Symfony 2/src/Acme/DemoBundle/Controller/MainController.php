<?php

namespace Acme\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Acme\DemoBundle\Entity\Person;
use Acme\DemoBundle\Form\PersonType;

class MainController extends Controller
{
    public function indexAction()
    {
        $person = new Person();
        $form = $this->createForm( new PersonType(), $person );
        return $this->render(
            'AcmeDemoBundle:Main:index.html.twig', array( 'form' => $form->createView()));
    }

}

//url http://laravel.dev/web/app_dev.php/index
