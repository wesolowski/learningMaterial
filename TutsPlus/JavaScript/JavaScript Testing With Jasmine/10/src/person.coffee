window.Person = (config) ->
    if config
        @name = config.name

Person::hands = 2
Person::legs = 2
Person::sayHello = (greeting = 'Hello') ->
    "#{greeting} There"

# Person::assignJob = (job) -> @job = job
Person::assignJob = (@job) ->
Person::setName = (@name) ->