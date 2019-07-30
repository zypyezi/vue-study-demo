
### 普通用法
1. 见 components/vModel/Index.vue 的demo
2. 灵活使用v-model可以减少很多代码量，一般不需要进行格式化处理的数据都可以使用v-model

### 在组件上使用 v-model
1. 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
  |-- 因为v-model 只是一个语法糖，实际相当于
  |-- 任意组件都可以使用该方法，直接使用默认的input 事件 和 value props 值

  ```
  <base-model :value="baseValue" @input="parentValue = arguments[0]"></base-model>
  
  ```
2. 当 value被占用 或者input 不存在时，可以通过修改model 的属性 [常见于select / checkbox]
  |-- prop  该表单元素的值
  |-- event  改变元素值时触发的事























注： 
1. 使用render语法， 里面的变量需要使用this.val 访问
2. 