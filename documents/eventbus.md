
#### 首先了解一下eventbus的基础概念

```
    利用发布/订阅的模式
    注册一个对象【中间者】， 里面包含主要包含addEventListener 和 dispatch 两个函数。
    每一次addEventListener时，会向总对象订阅一个事件 【一般包含作用域、事件名字、参数】
    而执行dispatch 的时候， 就是在该对象中去寻找对应的事件，并执行

```




#### 在vue 中使用eventbus

```
    // bus.js
    // 直接创建一个vue 实例， 可以利用实例的$emit $on 方法直接进行组件间的交互
    // 平时组件内使用的this.$emit 方法， this指向的是vm 实例， 所以其实本质是一样的
    // 注意最后要手动销毁
    import Vue from 'vue'
    export const EventBus = new Vue()

    EventBus.$emit('click')
    EventBus.$on('click', () => {} )

```

```
    // 全局的事件总线  -- 发布/订阅方法
    相比于前者，只是把EventBus 创建的实例放到了 Vue的原型上， 
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function () {
                return EventBus
            }
        }
    })

    这样就可以在全局通过this.$bus来直接访问 事件总线的实例， 避免各处引用bus.js 文件的弊端

```


```
    附： 
     虽然尚未使用过vue1.0， 但是查看资料说，vue1.0 中组件的通信主要通过vm.dispatch 沿父链向上传播， 用vm.$broadcast 向下广播
```