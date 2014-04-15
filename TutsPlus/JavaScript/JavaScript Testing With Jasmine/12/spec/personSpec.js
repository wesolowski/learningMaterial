
describe("Experimentation", function() {
    var elem;

    beforeEach(function() {
       elem = $('<div id="container"><p>Hello World</p></div>');
    });

    it("allows us to search with CSS selectors", function() {
        expect(elem).toBe('#container');
        expect(elem).toContain('p');

    });

    it("detects whether an element has a class", function() {
        expect(elem).not.toHaveClass('container');
    });

    it("detects whether an element has text", function() {
        expect(elem.children('p')).toHaveText('Hello World');
        expect(elem.children('p')).not.toHaveText('hello world');
        expect(elem.children('p').text().match(/world/i)).toBeTruthy();
    });

    it("should detect if an input has a value", function() {
        var input = $('<input value=myValue>');
        expect(input).toHaveValue('myValue')
    });

});
