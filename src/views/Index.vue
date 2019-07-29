<template>
    <div class="vue-app">
        <template v-for="item of studyList">
            <div @click="jumpTo(item)">{{item.name}}</div>
        </template>
    </div>
</template>

<script>
  import {studyList} from '../constant'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'vue-app',
    data(){
        return {
            studyList : studyList
        }
    },
      computed:{
      },
      methods:{
          jumpTo(item){
              this.$router.push(item.path)
          }
      }

    }
</script>

<style lang="scss" scoped>


    .vue-app{
        color: #ccc;
    }
 

</style>
