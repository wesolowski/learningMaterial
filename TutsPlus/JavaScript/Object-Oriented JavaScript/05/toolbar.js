//19:00
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


            // var item = {
            //     el : el,
            //     disable : function() {
            //         this.el.classList.add('disabled');
            //     },

            //     enable : function() {
            //         this.el.classList.remove('disabled');
            //     },

            //     isDisabled: function() {
            //         return this.el.classList.contains('disabled');
            //     },

            //     activate : function() {
            //         if(this.isDisabled()) {
            //             return;
            //         }
            //         this.el.classList.add('active');
            //     },

            //     deactivate : function() {
            //         if(this.isDisabled()) {
            //             return;
            //         }
            //         this.el.classList.remove('active');
            //     },

            //     isActive : function() {
            //         return this.el.classList.contains('active');
            //     },

            //     toggleActiveState : function() {
            //         if( this.isActive() ) {
            //             this.deactivate();
            //         } else {
            //             this.activate();
            //         }
            //     }
            // };

            // items.push(item);
        });

        return items;
    }

    oojs.createToolbar = function (elementId) {
        var element = document.getElementById( elementId );
        var items = element.querySelectorAll('.toolbar-item');



        return {
            items : createToolbarItems(items),

        }
        // if(!element)
        // {
            // element = document.createElement('div');
            // element.id = element
        // }
    };

    return oojs;

}(oojs || {}));


// var toolbar = oojs.createToolbar('myToolbar');

// var toolbarItem = toolbar.items[0];

// toolbarItem.setEnabled(true); //false
// toolbarItem.getEnabled(); //false


// toolbarItem.enabled = true; //or false

// var enabled = toolbarItem.enabled;