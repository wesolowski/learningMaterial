<?php

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;

// Metasteps
use Behat\Behat\Context\Step\Given;
use Behat\Behat\Context\Step\When;
use Behat\Behat\Context\Step\Then;

//
// Require 3rd-party libraries here:
//
require_once 'PHPUnit/Autoload.php';
require_once 'PHPUnit/Framework/Assert/Functions.php';
//

/**
 * Features context.
 */
class FeatureContext extends MinkContext
{
    private $output;
    /**
     * Initializes context.
     * Every scenario gets its own context object.
     *
     * @param array $parameters context parameters (set them up through behat.yml)
     */
    public function __construct(array $parameters)
    {
        // Initialize your context here
    }

    /** @BeforeScenario */
    public function beforeScenario()
    {
        var_dump($this->getMinkParameter('base_url'));
    }

    /** @Given /^I have a file named "([^"]*)"$/ */
    public function iHaveAFileNamed($file)
    {
        touch($file);
    }

    /**
     * @Given /^I have a dir named "([^"]*)"$/
     */
    public function iHaveADirNamed($dir)
    {
        mkdir($dir);
    }



    /** @When /^I run "([^"]*)"$/ */
    public function iRun($command)
    {
        exec($command, $this->output);
    }
    /** @Then /^I should see "([^"]*)" in the output$/ */
    public function iShouldSeeInTheOutput($string)
    {
        assertContains(
            $string,
            $this->output,
            sprintf('Did not see "%s" in the output', $string)
        );
    }

    /**
     * @BeforeScenario
     */
    public function moveIntoTestDir()
    {
        mkdir('test');
        chdir('test');
    }

    /**
     * @AfterScenario
     */
    public function moveOutOfTestDir()
    {
        chdir('..');
        if (is_dir('test')) {
            system('rm -r test');
        }
    }

    /**
     * @When /^I fill in the search box with "([^"]*)"$/
     */
    public function iFillInTheSearchBoxWith($searchTerm)
    {
//        $ele = $this->getPage()->findField('search');
//        $ele->setValue($searchTerm);
        return new When(sprintf(
            'I fill in "search" with "%s"',
            $searchTerm
        ));
    }

    /**
     * @Given /^I press the search button$/
     */
    public function iPressTheSearchButton()
    {
        //$this->getPage()->findButton('searchButton')->press();
        return new When('I press "searchButton"');
    }

    /**
     * @return \Behat\Mink\Element\DocumentElement
     */
    protected function getPage()
    {
        return $this->getSession()->getPage();
    }

    /**
     * @Given /^I am logged in$/
     */
    public function iAmLoggedIn()
    {
        return array(
            new Given('I am on "login"'),
            new Given('I fill in "Username" with "Ryan"'),
            new Given('I fill in "Password" with "foobar"'),
            new Given('I press "Login"'),
        );
    }
}
