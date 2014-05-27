courseTopic = 'CoffeeScript'


console.log  courseTopic
console.log  this.courseTopic #not work see -> call(this)
console.log  window.courseTopic #not work see -> call(this)

#coffee -c --bare filename -> without Ano. func. ( (function() {}).call(this); ), not recommended

# 1|
this.courseTopic = courseTopic

console.log  courseTopic
console.log  this.courseTopic #not work see -> call(this)
console.log  window.courseTopic #not work see -> call(this)

# 2|

# global
# export

root = exports ? this
root.courseTopic = courseTopic

console.log  courseTopic
console.log  this.courseTopic
console.log  window.courseTopic

# 3|

# classroom =
#     students: ["John", "Jane", "Jill", "Joe"]
#     print: ->
#         getName = (i) ->
#             this.students[i] # Error: Uncaught TypeError: Cannot read property '0' of undefined

#         for s,i in this.students
#             console.log getName i

# classroom.print()


classroom =
    students: ["John", "Jane", "Jill", "Joe"]
    print: ->
        getName = (i) =>
            this.students[i] # Error: Uncaught TypeError: Cannot read property '0' of undefined

        for s,i in this.students
            console.log getName i

classroom.print()
