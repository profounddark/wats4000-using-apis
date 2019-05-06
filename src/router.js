import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Rhymesaurus from '@/views/Rhymesaurus'
import Friendfinder from '@/views/Friendfinder'
import Adjectivizer from '@/views/Adjectivizer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/Rhymesaurus',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/Friendfinder',
      name: 'Friendfinder',
      component: Friendfinder
    },
    {
      path: '/Adjectivizer',
      name: 'Adjectivizer',
      component: Adjectivizer
    }
  ]
})
