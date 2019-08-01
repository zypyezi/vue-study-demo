<template>

</template>

<script>
// import {EventBus} from './bus.js'
 export default {
  name: 'show-child' ,
  data(){
      return{
        EventBus : null
      }
  },
  mounted() {
    // EventBus.$on('click', (e) => {
    //     console.log(e, 'click')
    // })
    // this.$bus.$on('click', (e) => {
    //   console.log(e, 'clickme')
    // })


    this.$bus.addEventListener('click', (e, data) => {
      console.log(e, 'clickme')
    })
    
  
  },
  created(){
  }
}
</script>

<style scoped>
</style>