<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;

class ReportController extends BaseController
{
    public function updatedEventsAction()
    {
        $reportManager = $this->container->get('yoda_event.reporting.event_report_manager');
        $content = $reportManager->getRecentlyUpdateReport();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');

        return $response;
    }
}
