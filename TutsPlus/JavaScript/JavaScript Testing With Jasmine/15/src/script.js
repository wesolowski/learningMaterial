var myObj = {
    someMethod: function() {
        console.log('called');
        $.get('someFile.html', function(data) {
            return data;
        });
    }
}

$.fn.asyncCall = function() {
    return this.each(function() {
        var el = $(this);

        $.get('someFile.html', function(data) {
            el.html(data);
        });
    });
};