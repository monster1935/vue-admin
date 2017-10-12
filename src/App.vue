<template>
  <div id="app">
    <div class="app-header">
      <div class="title">Vue动态多tabsDemo</div>
    </div>
    <div class="app-content">
      <div class="app-nav">
        <app-nav></app-nav>
      </div>
      <div class="app-wrap">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import AppNav from './components/common/AppNav';
export default {
  name: 'app',
  components: {
    AppNav
  }
}
</script>

<style lang="scss">

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-flow: column;
  color: #fff;
  .app-header {
    flex: 0 0 60px;
    background: #324057;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    .title {
      font-size: 24px;
    }
  }
  .app-content {
    flex: 1;
    display: flex;
    flex-flow: row;
    .app-nav {
      flex: 0 0 300px;
      background: #eff2f7;
    }
    .app-wrap {
      flex: 1;
    }
  }
}
</style>
