<?php

namespace Yoda\UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Yoda\UserBundle\Entity\User;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\DataFixtures\AbstractFixture;

class LoadUsers extends AbstractFixture implements ContainerAwareInterface, OrderedFixtureInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('darth');
        $user->setPassword($this->encodePassword($user, 'darthpass'));
        $user->setEmail('darth@deathstar.com');
        // $user->setIsActive(true);

        $manager->persist($user);

        $this->addReference('user-user', $user);

        $admin = new User();
        $admin->setUsername('admin');
        $admin->setPassword($this->encodePassword($admin, 'admin123'));
        $admin->setRoles(array('ROLE_ADMIN'));
        $admin->setEmail('wayne@deathstar.com');
        // $admin->setIsActive(false);
        $manager->persist($admin);



        $manager->flush();
    }

    private function encodePassword(User $user, $plainPassword)
    {
        $encoder = $this->container->get('security.encoder_factory')
                    ->getEncoder($user);

        return $encoder->encodePassword($plainPassword, $user->getSalt());
    }

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
        return 10;
    }


}
