describe("jQuery.styleWorld", function() {
    var frag;
    beforeEach(function() {
      frag = $( readFixtures('fragment.html') );
    });
    it("should be available on the jQuery object", function() {
        expect($.fn.styleWords).toBeDefined();
    });

    it("should be chainable", function() {
        expect( frag.styleWords() ).toBe( frag );
    });

    it("should wrap a specified number of words within a span tag", function() {
        frag.styleWords();
        expect(frag.find('span').length).toBe(1);
    });

    it("defaults to wrapping onlz one word", function() {
        frag.styleWords();
        expect(frag.find('span').text()).toBe('Lorem');
    });

    it("allows the user to specify the number of words to wrap in the span", function() {
        frag.styleWords(3);
        expect(frag.find('span').text()).toBe('Lorem ipsum dolor');
    });

    it("offers a defaults object on the styleWords namespace", function() {
        expect($.fn.styleWords.defaults).toBeDefined();
    });

    it("allows the user to override the defaults", function() {
        frag.styleWords(2, {
            id: 'some-id',
            'class' : 'some-class',
            tag : '<strong>'
        });
        expect(frag.find('strong').length).toBe(1);
        expect(frag.find('strong').text()).toBe('Lorem ipsum');
    });

    it("should apply adefault class of 'styleWords' to the wrapper", function() {
        frag.styleWords();
        expect(frag.find('span')).toHaveClass('styleWords');
    });

});