<?php
require_once 'TaskInterface.php';

class TaskRunner
{

    protected $tasks = array();

    public function registerTask(TaskInterface $task)
    {
        $this->tasks[] = $task;
    }

    // #1
    // public function runAll($options)
    // {
        // foreach ($this->tasks as $task)
        // {
            // $task->execute($options);
        // }
    // }

    // #2
    public function runAll($options)
    {
        foreach ($this->tasks as $index => $task)
        {
            $task->execute($options, $index);
        }
    }

}