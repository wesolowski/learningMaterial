// Object Shorthand

function getPersion() {
    let name = 'John';
    let age = 20;

    return {
        name : name,
        age: age
    }
}

console.log(getPersion());

function getPersionShort() {
    let name = 'John';
    let age = 20;

    return {
        name,
        age,
        greet() {
            return `Hello, ${this.name}`;
        }
    }
}

console.log(getPersionShort());
console.log(getPersionShort().greet());

let person = {
    name: 'Karen',
    age : 32,
    results: ['foo', 'bar']
};

let {results, age} = person;
console.log(results, age);

function getData({results, age}) {
    console.log(results, age);
}

getData(person);

