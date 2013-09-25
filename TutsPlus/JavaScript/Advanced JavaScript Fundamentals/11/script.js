localStorage.firstName = 'John';
localStorage.setItem('lastName', 'Doe');

console.log(localStorage.getItem('firstName') + ' '+ localStorage.lastName);

//localStorage is Case sensitivity: firstName is not the same a FirstName
console.log(localStorage.firstName, localStorage.FirstName);

localStorage.removeItem('lastName');
console.log(localStorage.lastName);

localStorage.clear();
console.log(localStorage.firstName);

//localStroge give always a string value
localStorage.age = 28;
var age = parseInt(localStorage.age);
console.log('typeof localStorage.age: ',typeof localStorage.age);
console.log('typeof  parseInt(localStorage.age): ',age);

var person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 28
};

localStorage.person = person;
console.log(localStorage.person); // return string: [object Object]

localStorage.person = JSON.stringify(person);
var personObj = JSON.parse( localStorage.person )
console.log('personObj: ',personObj);

//LocalStorage is restricted to your Domain


