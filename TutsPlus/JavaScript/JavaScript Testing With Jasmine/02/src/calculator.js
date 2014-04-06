window.Calculator = {

    current: 0,

    // add: function( nNumber1 ) {
    //     this.current += nNumber1;
    //     return this.current;
    // }

    add: function( nNumber1 ) {
        var sum = this.current;
        for (var i = arguments.length - 1; i >= 0; i--) {
            sum += arguments[i];
        };
        this.current = sum;
        return sum;
    },

    subtract: function( )
    {
        var result = this.current;
        for (var i = arguments.length - 1; i >= 0; i--) {
            result -= arguments[i];
        };
        this.current = result;
        return result;
    },

    reset: function()
    {
        this.current = 0;
    }

};