<?php

namespace Acme\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Acme\DemoBundle\Entity\Person;
use Acme\DemoBundle\Form\PersonType;
use Symfony\Component\HttpFoundation\Response;


class MainController extends Controller
{
    public function indexAction()
    {
        $person = new Person();
        $form = $this->createForm( new PersonType(), $person );

        $request = $this->get('request');
        $form->handleRequest($request);

        if( $request->getMethod() == 'POST' )
        {

            if($form->isValid())
            {
                $email = $form->get('email')->getData();
                $fullname = $form->get('fullname')->getData();

                $person->setEmail($email);
                $person->setFullname($fullname);

                $em = $this->getDoctrine()->getManager();
                $em->persist($person);
                $em->flush();

                return new Response('Person '.$fullname. '/'.$email . ' created');
            }
            return $this->render(
                'AcmeDemoBundle:Main:index.html.twig', array( 'form' => $form->createView())
            );

        }

        return $this->render(
            'AcmeDemoBundle:Main:index.html.twig', array( 'form' => $form->createView())
        );
    }

}

