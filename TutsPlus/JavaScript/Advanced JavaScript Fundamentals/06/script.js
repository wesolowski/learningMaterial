var obj = {

    name: 'obj object',
    doSomething : function() {
        console.log(this.name);
    },
    doSomethingElse : function( x, y) {
        console.log(this.name, x, y);
    }

};

var foo = {
    name : 'foo object'
};

var bar = {
    name : 'bar object'
};


obj.doSomething();
obj.doSomething.apply(foo);
obj.doSomethingElse(1,2);
obj.doSomethingElse.apply(bar, [3,4]);

obj.doSomething.call(foo);
obj.doSomethingElse.call(bar, 5, 6);

console.log('-----------------------');



var calculator  = function() {

    var fn = Array.prototype.pop.apply(arguments);
    return fn.apply(null, arguments);
};

var sum = function()
    {
        var total = 0;

        for (var i = 0, l = arguments.length; i < l; i++)
        {
            total = total + arguments[i];
        }
        return total;
    },
    diff = function()
    {

        var total = Array.prototype.shift.apply(arguments);

        for (var i = 0, l = arguments.length; i < l; i++)
        {
            total = total - arguments[i];
        }
        return total;
    };

var sumResult = calculator(1,2,3,4,5, sum),
   diffResult = calculator(1,2,3, diff);

console.log('sumResult', sumResult);
console.log('diffResult', diffResult);