var counter = {
    count: 0,
    inc: function () {
        return this.count++;
    }
};

console.log( counter.inc() );
console.log( counter.inc() );
console.log( counter.inc() );

var inc = counter.inc;

console.log( inc.call({count: 10}) );


var classroom = {
    students: ["John", "Jane", "Jill", "Joe"],
    print: function() {
        function getName(i) {
            return this.students[i];
        }

        for (var i = 0; i >= this.students.length; i++) {
            console.log( getName(i) );
        };
    }
}

classroom.print(); // node give error



var classroom = {
    students: ["John", "Jane", "Jill", "Joe"],
    print: function() {
        var thiz = this;
        function getName(i) {
            return thiz.students[i];
        }

        for (var i = 0; i >= this.students.length; i++) {
            console.log( getName(i) );
        };
    }
}

classroom.print();