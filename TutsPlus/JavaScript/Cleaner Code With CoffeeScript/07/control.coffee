name = "Rafal"

if name is "Rafal"
    console.log name
else if name is "Joe"
    console "Hi #{name}"
else
    console.log "What's your name"

# if (true) {action() }
if name is "Rafal" then console.log name
else if name is "Joe" then console "Hi #{name}"
else console.log "What's your name"


if name is "Rafal" then console.log name

console.log if name is "Rafal"

name = "Rafal"

machine =
    running : no
    turnOn: -> this.running = yes
    tunrOff: -> this.running = no

if not machine.running
    machine.turnOn()

unless machine.running
    machine.turnOn()

console.log machine.running

unless machine.running
    machine.turnOn()
else
    machine.turnOff()

person =
    name: 'Rafal'
    job: 'Programmer'

giveWork = (person) ->
    switch person.job
        when 'Programmer'
            console.log "Here's your code work, #{person.name}"
        when 'Designer'
            console.log "Here's your design work, #{person.name}"
        else
            console.log "Um, do you work here?"

giveWork = (person) ->
    switch person.job
        when 'Programmer' then console.log "Here's your code work, #{person.name}"
        when 'Designer' then console.log "Here's your design work, #{person.name}"
        else console.log "Um, do you work here?"

giveWork person

person1 =
    name: "Rafal"
    relationship: "Friend"

person2 =
    name: 'Jane'
    relationship: "Boss"

greet = (person) ->
    if person.relationship is "Friend"
        console.log "Hi, #{person.name}"
    else if person.relationship is "Boss"
        console.log "Hello, ma'am!"



greet = (person) ->
    msg = if person.relationship is "Friend"
        "Hi, #{person.name}"
    else if person.relationship is "Boss"
        "Hello, ma'am!"
    console.log msg

greet = (person) ->
    console.log if person.relationship is "Friend"
        "Hi, #{person.name}"
    else if person.relationship is "Boss"
        "Hello, ma'am!"



greet = (person) ->
    msg = switch person.relationship
        when "Friend" then "Hi, #{person.name}"
        when "Boss" then "Hello, ma'am!"
    console.log msg


greet person1
greet person2


