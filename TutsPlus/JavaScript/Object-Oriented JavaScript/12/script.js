var EventTarget = function() {
    Object.defineProperty(this, "__listeners", {
        value: {}
    });



};


Object.defineProperties(EventTarget.prototype, {
    addListener : {
        value: function(type, listener) {
            if(typeof this.__listeners[type] === 'undefined')
            {
                this.__listeners[type] = [];
            }
            this.__listeners[type].push(listener);
        },
        enumeable : true
    },

    __fire : {
        value : function(evtObj) {

            if( typeof evtObj.type === 'undefined'  )
            {
                throw new Error('Event object needs type');
            }

            if( typeof evtObj.target === 'undefined'  )
            {
                evtObj.target = this;
            }

            var listeners = this.__listeners[evtObj.type];

            if( typeof listeners === 'undefined')
            {
                return;
            }

            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, evtObj);
            };

        }
    },

    removeListener : {
        value: function(type, listener) {
            var listeners = this.__listeners[type];
            if(typeof listeners === 'undefined')
            {
                return;
            }
            for (var i = 0, len = listeners.length; i < len; i++) {
                if(listeners[i] === listener)
                {
                    listeners.splice(i,1);
                }
            };

        },
        enumeable : true
    },
});


var listener1 = function(evt)
{
    console.log(evt.type);
};

var listener2 = function(evt)
{
    console.log(evt.target);
}

var obj = new EventTarget();
obj.addListener('load', listener1);
obj.addListener('load', listener2);

obj.__fire({type : 'load'});

obj.removeListener('load', listener1);
obj.removeListener('load', listener2);




