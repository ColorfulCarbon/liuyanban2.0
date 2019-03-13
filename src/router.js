import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gouwuche from '@/components/Gouwuche.vue'
import Header from '@/components/Header.vue'
import ToDoBox from '@/components/ToDoBox.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gouwuche',
      component: Gouwuche
    },
    {
      path: '/',
      component: Header
    },
    {
      path: '/todobox',
      component: ToDoBox
    }
      
  ]
})
