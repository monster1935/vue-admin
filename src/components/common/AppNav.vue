<!-- 左侧菜单导航栏组件 -->

<template>
  <div class="app-nav-wrap">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        :key="menu.route">
        <i class="el-icon-menu"></i>{{menu.name}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          { route: '/', name: '首页'},
          { route: '/user', name: '用户管理'},
          { route: '/psd', name: '密码管理'},
          { route: '/salary', name: '工资管理'},
          { route: '/attendence', name: '考勤管理'},
          { route: '/perform', name: '绩效管理'},
          { route: '/admin', name: '系统管理'},
          { route: '/feedback', name: '意见反馈'}
        ]
      }
    },
    mounted () {
      // 刷新时以当前路由做为tab加入tabs
      if (this.$route.path !== '/') {
        this.$store.commit('add_tabs', {route: '/', name: '首页'});
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
      } else {
        this.$store.commit('add_tabs', {route: '/', name: '首页'});
      }
      this.$store.commit('set_active_index', this.$route.path);
    },
    computed: {
      options () {
        return this.$store.state.options;
      }
    }
  }
</script>
