<template>
  <div id="app">
    <!--左侧导航栏-->
    <LeftNav />
    <!--视图区域-->
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav.vue";
export default {
  components: { LeftNav }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
}

.view {
  height: 100%;
  width: 92%;
}
</style>
