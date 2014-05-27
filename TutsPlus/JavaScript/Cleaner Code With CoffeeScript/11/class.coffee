class Dog
    constructor: (@name) ->

    growl: ->
        console.log '*growl*'


dog = new Dog 'Rusty'
console.log dog.name


class BorderCollie extends Dog
    constructor: (@name, @tricks = []) ->
        super name

    perform: (trick) ->
        console.log if trick in @tricks then "#{@name} is #{trick}" else '*whine*'

    growl: (person) ->
        if person is @master
            console.log '*bark*'
        else
            super() # super is now grow from Dog | super or super()


dog2 = new BorderCollie 'Oreo',['playing dead', 'fetching a ball']
dog2.master = 'Jeremy'

console.log dog2.name
dog2.perform 'playing dead'
dog2.perform 'fetching a frisbee'
dog2.growl()
dog2.growl('Jeremy')
dog2.growl('Jim')
