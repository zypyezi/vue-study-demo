//  使用原生 
import Vue from 'vue'
var factory = function (){
    var EventBusClass = {}

    EventBusClass = function () {
        this.listeners = {}
    }
    EventBusClass.prototype = {
        addEventListener: function(type, callback, scope) {
			// arguments 是伪数组 无法直接调用slice方法
			// 利用 call 将Array.prototype.slice 方法作用域arguments
			// 而slice方法会返回一个新的数组
			// 所以变相将arguments 转化成了一个具有实例方法的数组 【本质是生成了新的数组】
			var args = Array.prototype.slice.call(arguments)
			args = args.length > 3 ? args.slice(3) : []
			if(typeof this.listeners[type] != "undefined") {
				this.listeners[type].push({scope:scope, callback:callback, args:args});
			} else {
				this.listeners[type] = [{scope:scope, callback:callback, args:args}];
			}
        },
        removeEventListener: function(type, callback, scope) {
            var curListeners = this.listeners[type]
			if(typeof curListeners != "undefined") {
				var len = this.listeners[type].length;
				var newArray = [];
				for(var i=0; i<len; i++) {
					var listener = this.listeners[type][i];
					if(listener.scope != scope || listener.callback != callback) {
                        newArray.push(listener)
					} 
				}
				this.listeners[type] = newArray;
			}
        },
        dispatch: function(type) {
			var args = Array.prototype.slice.call(arguments)
            var curListener = this.listeners[type]
			if(typeof curListener != "undefined") {
				var listeners = curListener.slice();
				for(var i=0; i<listeners.length; i++) {
					var listener = listeners[i];
					if(listener && listener.callback) {
						var concatArgs = args.slice(1).concat(listener.args);
						listener.callback.apply(listener.scope, concatArgs);
					}
				}
			}
        },
        
    }


	var EventBus = new EventBusClass();
	return EventBus;
}
var EventBus = factory()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})


