import Vue from 'vue'
import Router from 'vue-router'
import ViewHomePage from './views/ViewHomePage'
import ViewDailyMenu from './views/ViewDaliyMenu'
import ViewPageGroup from './views/ViewPageGroup'
import ViewPrices from './views/ViewPrices'
import ViewWeeklySchedule from './views/ViewWeeklySchedule'
import PageNotFound from './components/Common/PageNotFound'
import StoryExtended from './components/Operative/StoryExtended'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHomePage
    },
    { 
      path: "*", 
      component: PageNotFound 
    },
    {
      path: '/home',
      name: 'home',
      component: ViewHomePage
    },
    {
      path: '/story/:id',
      name: 'story',
      component: StoryExtended
    },
    {
      path: '/dailymenu',
      name: 'dailymenu',
      component: ViewDailyMenu
    },
    {
      path: '/about',
      name: 'about',
      component: ViewPageGroup
    },
    {
      path: '/prices',
      name: 'prices',
      component: ViewPrices
    },{
      path: '/weeklyschedule',
      name: 'weeklyschedule',
      component: ViewWeeklySchedule
    }
  ]
})
