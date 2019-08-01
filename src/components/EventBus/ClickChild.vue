<template>
    <div>
        <p v-for="item of data" @click="handleClick(item)"> 
            {{item.name}}
        </p>
    </div>
</template>

<script>
// import {EventBus} from './bus'
 export default {
  name: 'click-child' ,
  data(){
      return{
          data: [
              {name: 'item1'},
              {name: 'item2'},
              {name: 'item3'}
          ],
      }
  },
  created(){
  },
  beforeDestroy() {
    // EventBus.$off('click')
  },
  methods:{
      handleClick(item){
          this.$bus.dispatch('click', item)
        //   this.$bus.$emit('click', item)
        //   EventBus.$emit('click', item)
      }
  }
}
</script>

<style scoped>
</style>