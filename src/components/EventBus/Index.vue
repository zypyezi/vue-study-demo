<template>
  <div>
      <click-child>
      </click-child>

      <show-child>
      </show-child>
  </div>


</template>

<script>
import ClickChild from './ClickChild.vue'
import ShowChild from './ShowChild.vue'
// import './pubBus'
import './eventBus'

 export default {
  name: 'event-bus' ,
  components:{
    ClickChild,
    ShowChild
  },
  data(){
      return{

      }
  },
  created(){
     
  }
}
</script>

<style scoped>
</style>