<?php
require_once substr(__DIR__, 0,-4) . 'src' .DIRECTORY_SEPARATOR . 'FileSystem.php';


class FileSystemTest extends PHPUnit_Framework_TestCase
{

    const FILENAME = './log.txt';

    protected $logger;


    public function setUp()
    {
        $this->logger = new FileSystem(self::FILENAME);
    }

    public function testCreatingLogFile()
    {
        $this->logger->write('Hello moto');
        $this->assertFileExists(self::FILENAME);

    }

    public function testCreatingFileOnFirstWrite()
    {
        $this->assertFileNotExists(self::FILENAME);
        $this->logger->write('Hello world');
        $this->assertCount(1, file('./log.txt'));
        $this->assertFileExists(self::FILENAME);

    }

    public function testAppendingToFile()
    {
        $this->logger->write('Hello World');
        $this->logger->write('Hello World');
        $this->logger->write('Hello World');
        $this->assertCount(3, file('./log.txt'));
    }

    public function tearDown()
    {
        if(file_exists(self::FILENAME))
        {
            unlink(self::FILENAME);
        }
        $this->logger = null;
    }

}