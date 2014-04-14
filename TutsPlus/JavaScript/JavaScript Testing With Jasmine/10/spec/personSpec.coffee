describe 'Person', ->
    person = undefined

    beforeEach ->
        person = new Person

    it 'should accept an object upon instantiation', ->
      testPerson = new Person( name: 'Rafal' )
      expect(testPerson.name).toBe('Rafal')

    it 'should have two hands', ->
      expect(person.hands).toBe(2)

    it 'should have two legs ', ->
      expect(person.legs).toBe(2)

    it 'should be able to say hello', ->
      expect(person.sayHello()).toBe('Hello There')
      expect(person.sayHello('Yo')).toBe('Yo There')

    it 'should habe a name', ->
      person.setName('Rafal')
      expect(person.name).toBe('Rafal')

    it 'should have a job', ->
      person.assignJob('Web Developer')
      expect(person.job).toBe('Web Developer')

