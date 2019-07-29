
1. 使用jsx语法， 对应的babel插件存在的版本问题
```
@vue/babel-helper-vue-jsx-merge-props
@vue/babel-preset-jsx 
需要 babel 7+

使用babel6 的 使用 babel-plugin-transform-vue-jsx
```

2. 使用require 导入vue文件
    分别打印require 和import 导入的数据， 可以发现，  require.default === import 

    require导入的是一个模块 
   【require是commonjs的模块导入方式，不支持模块的默认导出， 导出的是一个含default属性的对象 】
```
     Module {default: {…}, __esModule: true, Symbol(Symbol.toStringTag): "Module"}
        default: {name: "v-model", data: ƒ, created: ƒ, render: ƒ, staticRenderFns: Array(0), …}
        _Ctor: {0: ƒ}
        Symbol(Symbol.toStringTag): "Module"
        __esModule: true
        __proto__: Object
        ......
```

    使用import 导入的是一份经过处理的数据
```
    {name: "v-model", data: ƒ, created: ƒ, render: ƒ, staticRenderFns: Array(0), …}
        beforeCreate: [ƒ]
        beforeDestroy: [ƒ]
        created: ƒ created()
        data: ƒ data()
        name: "v-model"
        render: ƒ ()
        staticRenderFns: []
        __file: "src/components/vModel/Index.vue"
        _compiled: true
        _scopeId: "data-v-c24505f4"

```
 补充几种引入文件的方法：
    1. components: require('../components/vModel/Index.vue')      component后面加上s
    2. 