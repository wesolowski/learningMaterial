
var Quiz = function(title) {
    this.title = title;
}

var quiz = new Quiz('My First Quiz');
console.log(quiz);
console.log(quiz.title);
$('body').html(quiz.title);

console.log('--------------------------');

var Person = function(config) {
    this.name = config.name;
    this.age = config.age;
    this.occupation = config.occupation;
    // this.work = function() {
    //
    // };
}

Person.prototype.work = function() {
    return this.name + ' is working';
}

var person = new Person({
    name : 'Rafal',
    age : 28,
    occupation : 'web developer'
});

console.log(person);
console.log(person.work());
console.log(person.age);
console.log(person.name);


var person2 = new Person({ name : 'John Doe', age : 35, occupation : 'web designer'});

console.log(person2);
console.log(person2.work());
console.log(person2.age);
console.log(person2.name);
