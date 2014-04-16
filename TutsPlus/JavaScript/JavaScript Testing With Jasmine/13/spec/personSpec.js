
describe("Learning About Fixtures", function() {

    it("offers three crucial functions", function() {
       //readFixtures
       //setFixtures
       //loadFixtures
       expect(readFixtures).toBeDefined();
       expect(setFixtures).toBeDefined();
       expect(loadFixtures).toBeDefined();
    });

    it("can load fixtures from a file", function() {
        loadFixtures('fragment.html');
        expect( $('.fragment') ).toExist();
    });

    it("can read fixtures without appending to DOM", function() {
        var fixture = readFixtures( 'fragment.html' );
        expect(fixture).toContain('li');
        expect($(fixture).find('li')).toHaveText('Add some data.');
    });

    it("can also receive the fixture as a parameter", function() {
      setFixtures('<div class="sandbox">hello there</div>');
      expect($('.sandbox')).toExist();
    });

    it("offers a sandbox function for convenience", function() {
      expect(sandbox).toBeDefined();
      // var sb = sandbox();
      // console.log(sb);
      setFixtures( sandbox() );
      expect($('#sandbox')).toExist();
    });

    it("offers a sandbox function for convenience (Part 2)", function() {
      expect(sandbox).toBeDefined();
      // var sb = sandbox();
      // console.log(sb);
      setFixtures( sandbox({
        'class' : 'some-class'
      }) );
      expect($('.some-class')).toExist();
      expect($('#sandbox')).toHaveClass( 'some-class' );

    });
});
