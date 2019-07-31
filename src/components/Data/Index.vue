<template>
    <div>
        this is a data : {{msg}}

        this is a Newdata : {{msg1}}

        this is a Compueddata : {{msg2}}

        <com :msg="'this is a prop'"></com>
    </div>
</template>

<script>
import com from './com.vue'
 export default {
  name: 'data' ,
  components: {com},
  
  data(){
      return{
          msg: 'just data ',
          msg1: 'just data'
      }
  },
  created(){

  },
  methods: {
      msg1 (){
          return 22
      },
      msg2 () {
          return 'this is a method'
      }
  },
  computed: {
      msg() {
          return 'computed data'
      },
      msg2 () {
          return 'computed msg'
      }
  },
}
</script>

<style scoped>
</style>