describe('Person', function() {
  var person;
  person = void 0;
  beforeEach(function() {
    return person = new Person;
  });
  it('should accept an object upon instantiation', function() {
    var testPerson;
    testPerson = new Person({
      name: 'Rafal'
    });
    return expect(testPerson.name).toBe('Rafal');
  });
  it('should have two hands', function() {
    return expect(person.hands).toBe(2);
  });
  it('should have two legs ', function() {
    return expect(person.legs).toBe(2);
  });
  it('should be able to say hello', function() {
    expect(person.sayHello()).toBe('Hello There');
    return expect(person.sayHello('Yo')).toBe('Yo There');
  });
  it('should habe a name', function() {
    person.setName('Rafal');
    return expect(person.name).toBe('Rafal');
  });
  return it('should have a job', function() {
    person.assignJob('Web Developer');
    return expect(person.job).toBe('Web Developer');
  });
});