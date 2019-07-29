import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import {studyList} from '../constant'
import Test from '../components/vModel/Index.vue'
Vue.use(Router)
console.log(Test)
console.log('0', require('../components/vModel/Index.vue'))

let routes = studyList.map(item => {
    return {
        path: item.path,
        name: item.name,
        // components: require('../components/vModel/Index.vue') 
        // component: () => import('../components/vModel/Index.vue')
        component: require('../components/vModel/Index.vue').default
    }
})

export default new Router({
    routes:[
        {
            path:'/index',
            name: 'Index',
            component: Index,
        },
        ...routes
    ]
})