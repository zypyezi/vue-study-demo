
### data 属性 为什么使用的是一个函数


以下几种同名的情况可以看出， 优先级 props > data > computed >  methods 

### data 和 computed 出现同名的情况
```
    data 定义的变量的优先级比 computed 高， computed 定义的变量会被覆盖掉

    源码中有一段代码，会对该情况提出一种警告 
    https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L200
    -----------  initComputed 函数 ------------
    if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm)
    }else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
    }
```


### data 和 methods 出现同名
```
    源码位置 ： https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L135
    if (methods && hasOwn(methods, key)) {
        warn(
            `Method "${key}" has already been defined as a data property.`,
            vm
        )
    }

```

### data 和 props 出现同名
```
    源码位置 ： https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L140
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    }

```


### computed 和 methods 同名 
```
    源码位置： https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L230
    if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
        warn(
            `Computed property "${key}" was assigned to but it has no setter.`,
            this
        )
        }
    }
    猜测是被method 影响 所以 没有了setter ， 待解决？？ 
```


```
    源码中初始化状态的顺序  
    props > methods > data > computed 
    https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L48
     vm._watchers = []
        const opts = vm.$options
        if (opts.props) initProps(vm, opts.props)
        if (opts.methods) initMethods(vm, opts.methods)
        if (opts.data) {
            initData(vm)
        } else {
            observe(vm._data = {}, true /* asRootData */)
        }
        if (opts.computed) initComputed(vm, opts.computed)
        if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch)
    }
```