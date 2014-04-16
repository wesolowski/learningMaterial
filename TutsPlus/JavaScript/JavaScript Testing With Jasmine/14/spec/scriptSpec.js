
describe("Learning About spies", function() {

    it("replaces the function it is spying on", function() {

        // spyOn(myObj, 'someMethod').andReturn('hello there');
        spyOn(myObj, 'someMethod').andCallFake(function(){
            return 'hello there';
        });
        expect(myObj.someMethod()).toBe('hello there');
    });

    it("makes async calls easier to work with", function() {
        spyOn($, 'ajax');

        setFixtures( sandbox() );

        $('#sandbox').asyncCall();
        //console.log($.ajax.mostRecentCall.args[0].success); // orignal function

        $.ajax.mostRecentCall.args[0].success('<li>one</li><li>two</li>')
        expect( $('#sandbox').find('li').length ).toBe(2);
    });

});
