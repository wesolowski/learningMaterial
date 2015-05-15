describe('TimedTask', function () {
    it('can be set a title', function() {
        expect(new TimedTask({ title: "My First Taks"}).title)
            .toEqual("My First Taks");
    });

    it('has a starting time', function() {
        expect(new TimedTask().startingDate)
            .toBeGreaterThan(128498);
    });
});
