arr = ['Nettus+', 'Aetuts', 'Phototuts+'];

###
    for( var i = 0; i < arr.length, i ++) {
        console.log(arr[i])
    }
###

for siteName in arr
    console.log siteName

for siteName, i in arr
    console.log "#{i}: #{siteName}"

for siteName, i in arr when siteName.indexOf("P") is 0
    console.log "#{i}: #{siteName}"

for siteName, i in arr by 2 # every second item
    console.log "#{i}: #{siteName}"

for siteName, i in arr when 1 % 2 is 0 # every second item
    console.log "#{i}: #{siteName}"

console.log siteName for siteName in arr

console.log ( siteName for siteName in arr )

console.log ( siteName.length for siteName in arr )

for key, value of obj
    console.log "#{key}:, #{value}"

for key, value of obj when key isnt "name"
    console.log "#{key}:, #{value}"

###
for (val in obj) {
  if (obj.hasOwnPropety(val))  {

  }
}

###

obj =
    name: 'Nettuts+'
    topic: 'Web Development'
    editor: 'Jeffrey Way'


for own key, value of obj
    console.log "#{key}:, #{value}"

Site = (name) ->
    this.name = name

Site.prototype.topic = "Web Developent"


for own key, value of obj
    console.log "#{key}:, #{value}"



i = 0

while arr[i]
    console.log arr[i]
    i++

i = 0

while not (i is arr.length)
    console.log arr[i]
    i++

i = 0

until i is arr.length
    console.log arr[i]
    i++

i = 0

console.log arr[i++] until i is arr.length


loop
    console.log arr[i++]
    break unless i < arr.length
