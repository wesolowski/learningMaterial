var foo = 5 < 6; // true
var foo = 7 < 6; // false
var foo = 6 <= 6; // true
var foo = 6 == 6; // true
var foo = 6 != 6; // false
var foo = 6 === '6'; // false
var foo = 6 !== '6'; // true
var foo = 6 == '6'; // true

//------------- if -----------
if( 5 < 6 )
{
	console.log('if');
}

//------------- else -----------

if( 7 < 6 )
{
	console.log('if');
}
else
{
	console.log('else');
}

//------------- elseif -----------


if( 7 < 6 )
{
	console.log('if');
}
else if (7 === 7) 
{
	console.log('elseif');
}
else
{
	console.log('else');
}


var foo = 'hello',
	bar = 5;

if( foo === 'hello' && bar < 6 )
{
	console.log('if');
}

if( 0 )
{
	console.log('if');
}
else
{
	console.log('else - 0');
}


var foo2; // undefined
if( foo2 )
{
	console.log('never if');
}

var foo3 = null; // undefined
if( foo3 )
{
	console.log('never if');
}

console.log(typeof null);



