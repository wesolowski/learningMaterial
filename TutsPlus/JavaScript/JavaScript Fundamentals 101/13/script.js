(function() {
	//getElementsByTagName give active p elements
	//querySelectorAll give p element - not upate
	var pElement = document.getElementsByTagName('p');
	var pElementQuery = document.querySelectorAll('p');

	console.log('nr1',pElement.length);//5
	console.log('nr2',pElementQuery.length);//5

	var el = document.createElement('p');

	document.body.appendChild(el);
	console.log('nr3',pElement.length); // 6
	console.log('nr4',pElementQuery.length);//5
	
	var pElementQuerySecond = document.querySelectorAll('p');
	console.log('nr5',pElementQuerySecond.length);//6
	
}());

(function() {

	var el = document.createElement('p'),
		content = document.createTextNode('<strong>This was dynamically created</strong>');

	el.appendChild(content);
	el.setAttribute('data-test', 'newAttribute');
	el.id = 'bar';
	document.body.appendChild(el);

}());

(function() {

	var doc = document,
		el = doc.createElement('p'),
		content = doc.createTextNode('This was dynamically created - nr 2'),
		pFoo = doc.getElementById('foo');

	el.appendChild(content);
	el.id = 'foobar';
	pFoo.parentNode.insertBefore(el);
	pFoo.parentNode.replaceChild(el, pFoo);

}());

(function() {

	var doc = document,
		el = doc.createElement('p'),
		pFoo = doc.getElementById('foobar');
		var html = el.innerHTML;

	el.innerHTML = "<strong>Text</strong>";
	pFoo.parentNode.insertBefore(el, pFoo);
	var html = el.innerHTML;

	html = html + "<br> This was, too";
	html = html + "<br> This was, too 2";
	html = html + "<br> This was, too 3";
	el.innerHTML = html;

}());


