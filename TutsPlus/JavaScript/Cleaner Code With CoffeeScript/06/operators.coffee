#=== !===
###
alias:
is  -> ===
isnt -> !==
###

name = "Rafal"

if name is "Rafal"
    console.log "Hi"

if name isnt "Rafal"
    console.log "Hi"

###
    if (! false) {

    }
     not
###

if not false
    console.log "Hi"

###

    var name = "Rafal",
        job = "Programmer"

    if( name === 'Rafal' || job === 'Programmer' ) {
        console.log( 'Hi!');
    }

###

name = "Rafal"
job  = "Programmer"

if name is "Rafal" and job is "Programmer"
    console.log "Hi!"

if name is "Rafal" or job is "Programmer"
    console.log "Hi!"



name = "Rafal"

if name?
    console.log "Hi!"

person =
    name: "Rafal"
    job: "Programmer"

console.log person?.name
console.log person?.name?.firstLetter?.somethingelese

name = "Rafal"
name ||= "Rafal"
name ?= "Rafal"

name1 = "Rafal"
name2 = name1 || "Joe"
console.log name2


# x = 4
# if (x >= 0 && x <= 10) {}
#

x = 4

if 0 <= x <= 10
    console.log "Hi"




