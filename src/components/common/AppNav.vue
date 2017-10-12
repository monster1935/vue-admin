<!-- 左侧菜单导航栏组件 -->

<template>
  <div class="app-nav-wrap">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        @click="onMenuClick(menu)">
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
      // 设置初始路由
      this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
      this.$store.commit('set_active_index', this.$route.path);
    },
    methods: {
      onMenuClick (menu) {
        let flag = false;
        for (let option of this.options) {
          if (option.name === menu.name) {
            // 设置当前tab为激活的tab
            flag = true;
            this.$store.commit('set_active_index', menu.route);
            break;
          }
        }
        // 未曾添加过的话添加到tabs列表中
        if (!flag) {
          this.$store.commit('add_tabs', menu);
          // 设置当前激活的tab
          this.$store.commit('set_active_index', menu.route);
        }

      }
    },
    computed: {
      options () {
        return this.$store.state.options;
      }
    },
    watch: {
      options () {
        console.log(this.options);
      }
    }
  }
</script>
