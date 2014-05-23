###

function greet(name) {
    console.log( 'hello ' + name + '!')
}

greet = function(name) {
}
###

# Create Function nr 1
# greet = () ->
greet = (name) ->
    name = name || "friend"
    console.log "Hello #{name}!"

greet "CoffeScripters"

greet() + 10

greet = (name) ->
    name = name || "friend"
    "Hello #{name}!"

console.log greet()

greet = (name = "friend") ->
    "Hello #{name}!"

console.log greet "Rafal"


test = (x, y, z ...) ->
    console.log x
    console.log y
    console.log z

test "one", "two", "three"
console.log "================="
test "one", "two", "three", "four", "five"

test ["one", "two", "three", "four", "five"]...

# Create Function nr 2
() ->
    console.log "Hello"

do () -> # invoke function
    console.log "Hello"

do (message = "Hello") ->
    console.log message


rand = (max = 10, min = 0) ->
    Math.floor( Math.random() * ( max - min + 1 ) ) + min


console.log rand()
console.log rand 100
console.log rand 60, 50
