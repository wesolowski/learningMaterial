<?php

namespace Yoda\EventBundle\Controller;

use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response;
use Yoda\EventBundle\Entity\Event;
use Yoda\EventBundle\Form\EventType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

/**
 * Event controller.
 *
 */
class EventController extends Controller
{

    /**
     * @Route("/", name="event")
     * @Template()
     * Lists all Event entities.
     *
     */
    public function indexAction()
    {
        /** @var $entitieRepo \Yoda\EventBundle\Entity\EventRepository */
        $entitieRepo = $this->getDoctrine()->getManager()->getRepository('EventBundle:Event');
        $entities = $entitieRepo->getUpcomingEvents();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new Event entity.
     *
     */
    public function createAction(Request $request)
    {

        $entity = new Event();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            // this works
            $entity->setOwner($this->getUser());

            // if we only have this, it would *not* work
            $events = $this->getUser()->getEvents();
            $events[] = $entity;
            $this->getUser()->setEvents($events);

            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('event_show', array('slug' => $entity->getSlug())));
        }

        return $this->render('EventBundle:Event:new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a Event entity.
     *
     * @param Event $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Event $entity)
    {
        $form = $this->createForm(new EventType(), $entity, array(
            'action' => $this->generateUrl('event_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Event entity.
     *
     */
    public function newAction()
    {

        $entity = new Event();
        $form   = $this->createCreateForm($entity);

        return $this->render('EventBundle:Event:new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Finds and displays a Event entity.
     *
     */
    public function showAction($slug)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('EventBundle:Event')
                     ->findOneBy(array( 'slug' => $slug ) );

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Event entity.');
        }

        $deleteForm = $this->createDeleteForm($entity->getId());

        return $this->render('EventBundle:Event:show.html.twig', array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing Event entity.
     *
     */
    public function editAction($id)
    {
        $this->enforceUserSecurity();

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('EventBundle:Event')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Event entity.');
        }

        $this->checkOwnerSecurity($entity);

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return $this->render('EventBundle:Event:edit.html.twig', array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
    * Creates a form to edit a Event entity.
    *
    * @param Event $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(Event $entity)
    {
        $form = $this->createForm(new EventType(), $entity, array(
            'action' => $this->generateUrl('event_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
    /**
     * Edits an existing Event entity.
     *
     */
    public function updateAction(Request $request, $id)
    {
        $this->enforceUserSecurity();

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('EventBundle:Event')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Event entity.');
        }

        $this->checkOwnerSecurity($entity);

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('event_edit', array('id' => $id)));
        }

        return $this->render('EventBundle:Event:edit.html.twig', array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
    /**
     * Deletes a Event entity.
     *
     */
    public function deleteAction(Request $request, $id)
    {
        $this->enforceUserSecurity();

        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('EventBundle:Event')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Event entity.');
            }

            $this->checkOwnerSecurity($entity);

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('event'));
    }


    public function attendAction($id, $_format)
    {
        $em = $this->getDoctrine()->getManager();
        $event = $em->getRepository('EventBundle:Event')->find($id);

        if(!$event) {
            throw $this->createNotFoundException('No event found for id ' . $id);
        }

        if(!$event->hasAttendees($this->getUser())) {
            $event->getAttendees()->add($this->getUser());
        }

        $em->persist($event);
        $em->flush();

        if( $_format === 'json' ){
            $data = array(
                'attending' => 1
            );

            return new Response(json_encode($data));
        }

        return $this->redirect($this->generateUrl(
            'event_show', array('slug' => $event->getSlug()))
        );

    }

    public function unattendAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $event = $em->getRepository('EventBundle:Event')->find($id);

        if(!$event) {
            throw $this->createNotFoundException('No event found for id ' . $id);
        }

        if($event->hasAttendees($this->getUser())) {
            $event->getAttendees()->removeElement($this->getUser());
        }

        $em->persist($event);
        $em->flush();

        return $this->redirect($this->generateUrl(
                'event_show', array('slug' => $event->getSlug()))
        );
    }

    /**
     * Creates a form to delete a Event entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('event_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm()
        ;
    }

    private function enforceUserSecurity($role = 'ROLE_USER')
    {
        $securityContext = $this->get('security.context');
        if( !$securityContext->isGranted($role) )
        {
            throw $this->createAccessDeniedException("Need " . $role);
        }
    }

    /**
     * @param Event $event
     */
    private function checkOwnerSecurity(Event $event)
    {
        $user = $this->getSecurityContext()
                     ->getToken()
                     ->getUser();

        if ($user != $event->getOwner())
        {
            throw new AccessDeniedException('You are not the owner!!!');
        }
    }



}
