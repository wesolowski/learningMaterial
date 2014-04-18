// $.fn.styleWords = function(numWords, config) {
//     numWords = numWords || 1;

//     config = $.extend({}, $.fn.styleWords.defaults, config);

//     return this.each(function(){
//         var el = $(this);
//         el.html(function(){
//             var words = el.text().split(' ');

//             var tag = config.tag;

//             delete config.tag;

//             var wrapper = $(tag, config).text(words.splice(0, numWords).join(' '));
//             wrapper = $('<div>').append(wrapper).html();
//             return [wrapper].concat(words).join(' ');
//         });
//     });
// }

// $.fn.styleWords.defaults = {
//     tag: '<span>',
//     'class': 'styleWords'
// }

// With Code refactoring

(function($){

    var styleWords = {

        init: function(el, numWords, config) {
            this.numWords = numWords || 1;
            this.config = $.extend({}, $.fn.styleWords.defaults, config);
            this.el = el;
            this.$el = $(el);

            this.updateHTML();
        },

        updateHTML: function() {
            var self = this;
            this.$el.html(function(i, text) {
                return self.createWrapper( text );
            });
        },

        createWrapper: function(text) {
            var words = text.split(' ');
            var tag = this.config.tag;
            var wrapper;

            delete this.config.tag;

            wrapper = $(tag, this.config).text(words.splice(0, this.numWords).join(' '));
            wrapper = $('<div>').append(wrapper).html();

            return [wrapper].concat(words).join(' ');
        }

    };

    $.fn.styleWords = function(numWords, config) {

        var obj = Object.create(styleWords);
        return this.each(function() {
            obj.init(this, numWords, config);
        });

    };

    $.fn.styleWords.defaults = {
        tag: '<span>',
        'class': 'styleWords'
    }

})(jQuery);
