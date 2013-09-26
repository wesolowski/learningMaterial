

var person = {
    name  : 'John Doe',
    greet : function() {
        return 'My name is ' + this.name;
    }
};

console.log(person.greet());

var name = 'Jane Doe';

var gloabGreet = function() {
    return 'My name is ' + this.name;
};

console.log(gloabGreet());

var johnDoe = {
    name : 'John Doe',
    greet : gloabGreet
}

console.log(johnDoe.greet());

var johnDoe = {
    name : 'John2 Doe',
    greet : window.gloabGreet
}

console.log(johnDoe.greet());

var johnDoe = {
    name : 'John2 Doe',
    greet : window.gloabGreet.bind(window)
}

console.log(johnDoe.greet());


var makeRequest = function(url, callback) {
    //make the request witht he provided url

    var data = 10; //json text xml

    callback(data);
}

var obj = {
    someValue : 20,
    loadData : function(data) {
        var sum = this.someValue + 10;
        console.log(sum);
    },
    prepareRequest : function() {
        var url = 'http://numberservice.com';

        makeRequest(url, this.loadData.bind(this));
    }
};

obj.prepareRequest();

// bind - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind




