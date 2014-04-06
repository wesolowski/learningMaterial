describe("Some feature", function() {

    describe("#someFunction", function(){
        it("should return true when called", function() {
            expect(someFunction()).toEqual(true);
            expect(someFunction()).toBeTruthy();
        });
        
        it("returns an array of names", function() {
            expect(anotherFunction()).toContain('Rafal');
            expect(anotherFunction()).toNotContain('John');
            expect(anotherFunction()).not.toContain('John');
        });

    });


    describe("#someFunctionTwo", function(){
        it("should return false when called", function() {
            expect(someFunctionTwo()).toEqual(false);
            expect(someFunctionTwo()).not.toBeTruthy();
            expect(someFunctionTwo()).toBeFalsy();
        });

    });
    
    describe("User", function(){
        it("should ensure taht the user is 21 or older", function() {
            expect(User.getAge()).toBeGreaterThan(21);
        });

    });
});