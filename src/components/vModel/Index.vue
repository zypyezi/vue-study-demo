
<template>
    <div>
        <div>
            <input v-model="msg" placeholder="input message">
            <p>Msg: {{ msg }}</p>
        </div>
       
        <div>
            <input type="radio" value="msg1" v-model="msg1">
            <input type="radio" value="msg2" v-model="msg1">
            <p>data: {{ msg1 }}</p>
        </div>
        
        <div>
            <input type="checkbox" value="check" v-model="isChecked" true-value="1" false-value="0"> 
            <p>checked: {{ isChecked }}</p>
        </div>

        <div>
            <input type="checkbox" value="c1" v-model="vals">
            <input type="checkbox" value="c2" v-model="vals">
            <input type="checkbox" value="c3" v-model="vals">
            <p>checked: {{ vals }}</p>
        </div>

        <base-model v-model="baseValue" ></base-model>
        <check-model v-model="checkValue"></check-model>
        <!-- <base-model :value="baseValue" @input="handleInput"></base-model> -->

        <div @click="showData">查看数据</div>
    </div>
</template>

<script>
 import {baseModel, checkModel}  from './component'
 export default {
  name: 'v-model' ,
  components: {baseModel, checkModel},
  data(){
      return{
        baseValue: '33',
        checkValue: true,
        msg: '',
        msg1: false,
        isChecked: 1,
        vals: []
      }
  },
  created(){

  },
  methods: {
    showData (){
        console.log(this.checkValue)
    }  
}
}
</script>

<style scoped>
</style>