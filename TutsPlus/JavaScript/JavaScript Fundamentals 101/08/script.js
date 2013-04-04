var foo = new Array(11, 'hello', true);

var length = foo.length;

console.log( foo[0], length );
foo[1] = 13;
console.log( foo );

//-----------------------------

var foo = [11, 'hello', true];

foo[3] = 15;
foo[4] = 'whatever';

foo[foo.length] = 'a new value';
foo.push('a another new value');
console.log( foo );

var names = ['Jeremy', 'Jeffrey'],
	names2 = ['Jennifer', 'Jackie'];

var people = names.concat(names2);
console.log(people);

var people = names.concat(names2, ['test8', 'test2'], ['test3', 'test4']);
console.log(people);

var joined = people.join(' - ');
console.log(joined);

var reversed = people.reverse();
console.log(reversed);

var sorted = people.sort();
console.log(sorted);

