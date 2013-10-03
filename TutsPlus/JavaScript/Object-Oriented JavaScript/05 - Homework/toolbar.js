
var oojs = (function(oojs) {

    var createToolbarItems = function( itemElements ) {
        var items = [];

        [].forEach.call(itemElements, function(el, index, array){
            var item = {
                toggleActiveState: function() {
                    this.activated = !this.activated
                }
            };

            Object.defineProperties(item,{
                el: {
                    value: el
                },
                enabled:{
                    get: function() {
                        return !this.el.classList.contains('disabled');
                    },
                    set : function(value) {
                        if( value ) {
                            this.el.classList.remove('disabled')
                        } else {
                            this.el.classList.add('disabled');
                        }
                    }
                },
                activated : {
                    get: function() {
                        return this.el.classList.contains('active');
                    },
                    set : function(value) {
                        if( value ) {
                            this.el.classList.add('active');
                        } else {
                            this.el.classList.remove('active')
                        }
                    }
                }
            });

            items.push(item);

        });

        return items;
    }

    oojs.createToolbar = function (elementId) {
        var element = document.getElementById( elementId );

        if(!element)
        {
            element = document.createElement('DIV');
            element.id = elementId;
            element.className = 'toolbar';
            document.body.appendChild(element);
        }

        return {
            items : function() {
                var items = element.querySelectorAll('.toolbar-item');
                return createToolbarItems(items)
            },
            add : function() {
                var item = document.createElement('span');
                item.className = 'toolbar-item';
                element.appendChild(item);
            },
            remove : function() {
                var items = element.getElementsByTagName('span');
                var length = items.length;
                // element.removeChild(items[0]);
                if(length)
                {
                    element.removeChild(items[length - 1]);
                }
            }

        }

    };

    return oojs;

}(oojs || {}));

var toolbar = oojs.createToolbar('myToolbar');
toolbar.add();
toolbar.add();
toolbar.add();

toolbar.remove();

var items = toolbar.items();
items[0].toggleActiveState();