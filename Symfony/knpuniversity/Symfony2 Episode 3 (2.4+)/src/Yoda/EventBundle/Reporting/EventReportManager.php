<?php
namespace Yoda\EventBundle\Reporting;

use Doctrine\Common\Persistence\ObjectManager;

/**
 * Look mom, I'm a service!!!
 *
 * @package Yoda\EventBundle\Reporting
 */
class EventReportManager
{

    private $em;

    public function __construct( ObjectManager $em)
    {
        $this->em = $em;
    }

    public function  getRecentlyUpdateReport()
    {
        $events = $this->em
                       ->getRepository('EventBundle:Event')
                       ->getRecentlyUpdatedEvents();

        $rows = array();
        foreach($events as $event)
        {
            $data = array($event->getId(), $event->getName(), $event->getTime()->format('Y-m-d H:i:s'));
            $rows[] = implode(',', $data);
        }

        return implode('\n', $rows);
    }
} 