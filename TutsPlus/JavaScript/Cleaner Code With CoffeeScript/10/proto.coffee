###

function Dog (name) {
    this.name = name:
}
Dog.prototype.growl = function() {
    console.log( '*growl*' );
}

r = new Dog('Rusty');

r.growl();

###

Dog = (name) ->
    this.name = name

Dog = (name) ->
    @name = name

d = new Dog "Rusty"

console.log d.name


Dog = (@name) ->

Dog.prototype.growl = ->
    console.log '*growl*'

Dog::growl = ->
    console.log '*growl*'

BorderCollie extends Dog

BorderCollie = (@name, @trick) ->

BorderCollie::perform = (trick) ->
    if trick in @tricks
        console.log "#{@name} is #{trick}"
    else
        console.log '*whine*'

rusty = new BorderCollie 'Rusty', ['playing dead', 'catching a frisbee', 'rolling over']

rusty.perform 'playing dead'


rusty.growl()



