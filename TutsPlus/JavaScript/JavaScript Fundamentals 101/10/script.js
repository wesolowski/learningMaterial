

for( var iVar = 0; iVar <= 5; iVar++ )
{
	console.log('loop nr 1: for | Value:', iVar);
}

var names = ['Jeremy', 'Jeffrey', 'Jennifer', 'Jackie'];

for( var iVar = 0, len = names.length; iVar < len; iVar++ )
{
	var name = names[iVar]
	console.log('loop nr 2: for | Value:', name);
}



while( names.length > 0 )
{
	var element = names.pop();
	console.log('loop nr 3: while | Value:', element, ' array:', names);
}

var names2 = [];

do {
	var element = names2.pop();
	console.log('loop nr 4: do while | Value:', element, ' array:', names2);
}while( names2.length > 0 )

