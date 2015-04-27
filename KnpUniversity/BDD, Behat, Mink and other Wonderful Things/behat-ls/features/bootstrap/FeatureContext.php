<?php

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;

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
}
