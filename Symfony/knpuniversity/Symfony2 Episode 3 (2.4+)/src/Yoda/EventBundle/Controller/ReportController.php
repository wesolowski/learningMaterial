<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;
use Yoda\EventBundle\Reporting\EventReportManager;

class ReportController extends BaseController
{
    public function updatedEventsAction()
    {
        $reportManager = new EventReportManager($this->getDoctrine()->getManager());
        $content = $reportManager->getRecentlyUpdateReport();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');

        return $response;
    }
}
