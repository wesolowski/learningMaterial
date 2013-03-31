<?php 

require_once substr(__DIR__, 0,-4) . 'src' .DIRECTORY_SEPARATOR . 'TaskRunner.php';


class TaskRunnerTest extends PHPUnit_Framework_TestCase
{

	// #1
	// public function testRunAllPassesParamsCoreeclty()
	// {

	// 	$mock = $this->getMock('TaskInterface', array('execute'));
	// 	$mock->expects($this->once())
	// 		 ->method('execute');

	// 	$runner = new TaskRunner();
	// 	$runner->registerTask($mock);
	// 	$runner->runAll( array() );


	// }

	// public function testRunAllPassesParamsCoreecltyAnother()
	// {

	// 	$mock = $this->getMock('TaskInterface', array('execute'));
	// 	$mock->expects($this->exactly(2))
	// 		 ->method('execute');

	// 	$runner = new TaskRunner();
	// 	$runner->registerTask($mock);
	// 	$runner->registerTask($mock);
	// 	$runner->runAll( array() );

	// }

	// public function testRunAllPassesParamsCoreecltyTwo()
	// {

	// 	$mock = $this->getMock('TaskInterface', array('execute'));
	// 	$mock->expects($this->exactly(2))
	// 		 ->method('execute')
	// 		 ->with($this->equalTo(array('foo')));

	// 	$runner = new TaskRunner();
	// 	$runner->registerTask($mock);
	// 	$runner->registerTask($mock);
	// 	$runner->runAll( array('foo') );

	// }

	//#2
	public function testRunAllPassesParamsCoreecltyTwo()
	{

		$mock = $this->getMock('TaskInterface', array('execute'));
		$mock->expects($this->exactly(2))
			 ->method('execute')
			 ->with(
			 	$this->equalTo(array('foo')),
			 	$this->greaterThanOrEqual(0)
			 );

		$runner = new TaskRunner();
		$runner->registerTask($mock);
		$runner->registerTask($mock);
		$runner->runAll( array('foo') );

	}

}