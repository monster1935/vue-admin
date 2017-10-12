import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Template
    },
    {
      path: '/user',
      name: '用户管理',
      component: Template
    },
    {
      path: '/psd',
      name: '密码管理',
      component: Template
    },
    {
      path: '/salary',
      name: '工资管理',
      component: Template
    },
    {
      path: '/attendence',
      name: '考勤管理',
      component: Template
    },
    {
      path: '/perform',
      name: '绩效管理',
      component: Template
    },
    {
      path: '/admin',
      name: '系统管理',
      component: Template
    },
    {
      path: '/feedback',
      name: '意见反馈',
      component: Template
    }
  ]
})
