(function() {
    //alt
    var pElements = document.getElementsByTagName("p"), //NodeList
        lastPElements = pElements[pElements.length -1],
        pElement = document.getElementById("foo"),
        pElementNull = document.getElementById("foo1");

    console.log(pElements);
    console.log(pElements.length);
    console.log(lastPElements);
    if( pElementNull === null) {

    }
    console.log(pElement);

    for (var i = 0, len = pElements.length; i < len; i++)
    {
        console.log(pElements[i]);
    };

    //new
    console.log('------' , ' new ' , '-----------');
    var pElementNew = document.querySelector("p"),
        pElementsNew = document.querySelectorAll("p"),
        pElementsInDivNew = document.querySelectorAll("div p"),
        pElementInDivNew = document.querySelector("div p"),
        elementById = document.querySelector("#foo");

    console.log(pElementNew); //one p element
    console.log(pElementNew.parentNode); //body
    console.log(pElementsNew); // p elements
    console.log(pElementsNew.length); // count p elements
    console.log(pElementsInDivNew); // count p elements in Div
    console.log(pElementsInDivNew.length); // count p elements in Div
    console.log(pElementInDivNew); // p element in Div
    console.log(elementById); // element bei ID
    console.log(elementById.parentNode.tagName); // parent element bei ID
    console.log(elementById.parentNode); // parent element bei ID

    /*  ---INFO ---

        getElemntsByTagName() is faster than querySelectorAll();
        getElementById() is faster than querySelector()
    */

}());
