<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;

class ReportController extends BaseController
{
    public function updatedEventsAction()
    {
        $events = $this->getDoctrine()
                    ->getManager()
                    ->getRepository('EventBundle:Event')
                    ->createQueryBuilder('e')
                    ->andWhere('e.updated > :since')
                    ->setParameter('since', new \DateTime('24 hours ago'))
                    ->getQuery()
                    ->execute();

        $rows = array();
        foreach($events as $event)
        {
            $data = array($event->getId(), $event->getName(), $event->getTime()->format('Y-m-d H:i:s'));
            $rows[] = implode(',', $data);
        }

        $content = implode('\n', $rows);
        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');

        return $response;
    }
}
