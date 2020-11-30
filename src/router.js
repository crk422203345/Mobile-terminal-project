import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/livelogic'
    },
    //首页面
    {
      path: '/livelogic',
      component: () => import('./views/Livelogic'),
      children:[
        //我的
        {
          path: 'surprised',
          component: () => import('./components/Surprised')
        },
        //惊喜
        {
          path: 'mine',
          component: () => import('./components/Mine')
        },
        //素材
        {
          path: 'material',
          component: () => import('./components/Material')
        },
        //首页
        {
          path: 'homepage',
          component: () => import('./components/HomePage')
        },
        //重定向
        {
          path: '/livelogic',
          redirect:'/livelogic/homepage'
        }
      ]
    }
  ]
})
