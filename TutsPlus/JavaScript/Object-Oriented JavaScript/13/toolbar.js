var oojs = (function (oojs) {

    var ToolbarItem = function( itemElement ){
        EventTarget.call(this);

        Object.defineProperty(this, '__el', {
            value : itemElement
        });
    };

    ToolbarItem.prototype = Object.create(EventTarget.prototype, {

        toggleActiveState: {
            value: function () {
                this.activated = !this.activated;
            },
            enumerable : true
        },
        enabled: {
            get: function () {
                return !this.__el.classList.contains("disabled");
            },
            set: function (value) {
                var currentValue = this.enabled;

                if(currentValue === value){
                    return;
                }

                if (value) {
                    this.__el.classList.remove("disabled");
                } else {
                    this.__el.classList.add("disabled");
                }

                this.__fire({
                    type : 'enabledchanged',
                    value : value
                });
                //enabledchanged
                //
            }



        },
        activated: {
            get: function () {
                return this.__el.classList.contains("active");
            },
            set: function (value) {
                var currentValue = this.activated;

                if(currentValue === value){
                    return;
                }

                if (value) {
                    this.__el.classList.add("active");
                } else {
                    this.__el.classList.remove("active");
                }

                this.__fire({
                    type : 'activatedchanged',
                    value : value
                });
            }

            //activatedchanged
        }

    });


    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {
            var item = new ToolbarItem(el);

            items.push(item);
        });

        return items;
    };

    var Toolbar = function(toolbarElement) {
        EventTarget.call(this);
        var items = toolbarElement.querySelectorAll(".toolbar-item");

        Object.defineProperties(this, {
            __el: {
                value: toolbarElement
            },
            items: {
                value: createToolbarItems(items),
                enumerable : true
            }
        });
    };

    Toolbar.prototype = Object.create(EventTarget.prototype, {
        add: {
            value: function (options) {
                var span = document.createElement("SPAN");
                span.className = "toolbar-item";

                this.__el.appendChild(span);

                var item = new ToolbarItem(span);

                this.items.push(item);

                this.__fire({
                    type : 'itemadded',
                    item : item
                });
            },
            enumerable : true
        },
        remove: {
            value: function (index) {
                var len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("Index is out of range");
                }

                var item = this.items[index];
                this.items.splice(index, 1);

                this.__el.removeChild(item.__el);
                item = null;

                this.__fire({
                    type : 'itemaremove',
                    index : index
                });
                //item : item
            },
            enumerable : true
        },
        appendTo: {
            value: function (parentElement) {
                parentElement.appendChild(this.__el);

                this.__fire({
                    type : 'appended',
                    parentElement : parentElement
                });
            }
        }
    });

    oojs.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);

        if (!element) {
            element = document.createElement("DIV");
            element.id = elementId;
            element.className = "toolbar";
        }
        return new Toolbar(element);
    };

    return oojs;
}(oojs || {}));
