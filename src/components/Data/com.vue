
<template>
    <div>
        this is a data : {{msg}}
    </div>
</template>

<script>
 export default {
  name: 'com' ,
  props: ['msg'],
  data(){
      return{
          msg: 'just data ',
      }
  }
}
</script>

<style scoped>
</style>