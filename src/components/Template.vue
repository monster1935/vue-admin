<!-- 模板组件，用于模拟不同路由下的组件显示 -->
<template>
  <div class="router-template">
    <div class="template-tabs">
      <el-tabs
        v-model="activeIndex"
        type="card"
        closable
        @tab-click="tabClick"
        v-if="options.length"
        @tab-remove="tabRemove">
        <el-tab-pane
          :key="item.name"
          v-for="(item, index) in options"
          :label="item.name"
          :name="item.route">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="content-wrap">
      {{$route.name}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      };
    },
    methods: {
      tabClick () {
        this.$router.push({path: this.activeIndex});
      },
      tabRemove (targetName) {
        if(targetName == '/') {
          return;
        }
        this.$store.commit('delete_tabs', targetName);
        if (this.activeIndex === targetName) {
          // 设置当前激活的路由
          if (this.options && this.options.length >= 1) {
            this.$store.commit('set_active_index', this.options[this.options.length-1].route);
            this.$router.push({path: this.activeIndex});
          } else {
            this.$router.push({path: '/'});
          }
        }
      }
    },
    computed: {
      options () {
        return this.$store.state.options;
      },
      activeIndex: {
        get () {
          return this.$store.state.activeIndex;
        },
        set (val) {
          this.$store.commit('set_active_index', val);
        }
      }
    },
    watch: {
      '$route'(to) {
        let flag = false;
        for (let option of this.options ) {
          if (option.name === to.name) {
            flag = true;
            this.$store.commit('set_active_index', to.path);
            break
          }
        }
        if (!flag) {
          this.$store.commit('add_tabs', {route: to.path, name: to.name});
          this.$store.commit('set_active_index', to.path);
        }
      }
    }
  }
</script>
<style>
  .router-template {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    height: 100%;
  }
  .content-wrap {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
</style>
