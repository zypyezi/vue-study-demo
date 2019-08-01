// 全局
import Vue from 'vue'

var EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})


