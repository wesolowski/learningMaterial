class TaskCollection {

    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(function (task) {
            console.log(task);
        })
    }
}

class Task{
    toGulp() {
        console.log('converting to gulp');
    }
}

new TaskCollection([
   new Task, new Task, new Task
]).log();

class TaskCollectionArrow {

    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => {
            console.log(task);
        });
        this.tasks.forEach(
            task => console.log(task)
        );

        this.tasks.forEach(
            (task, index) => console.log(index, task)
        );

        this.tasks.forEach(
            () => console.log('Hi')
        );
    }

    prepare() {
        this.tasks.forEach(task => {
            console.log(this); // this is TaskCollectionArrow Object!
        })
    }
}

new TaskCollectionArrow([
    new Task, new Task, new Task
]).log();

new TaskCollectionArrow([
    new Task, new Task, new Task
]).prepare();
