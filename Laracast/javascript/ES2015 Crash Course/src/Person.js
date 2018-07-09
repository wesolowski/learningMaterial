class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' say hello.'; //review template string
    }
}

console.log(new Person('Rafal').greet())