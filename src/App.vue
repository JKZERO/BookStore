<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    background-color: #F0F0F0;
  }
  #app {
    font-family: PingFangSC-regular,'Microsoft Yahei';
    min-height: 6.67rem;
  }
</style>
