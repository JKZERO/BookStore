<template>
    <div class="headed">
      <div class="warp">
        <span class="iconfont icon-sousuo"></span>
        <input v-model="sousuoValue" class="sousuo" type="text" placeholder="搜索"/>
        <span @click="clean" v-show="sousuoValue" class="iconfont icon-quxiao"></span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MainHeader",
      data (){
        return {
          sousuoValue: ""
        }
      },
      methods: {
        clean () {
          this.sousuoValue = ""
        }
      }
    }
</script>

<style scoped>
  .headed{
    overflow: hidden;
    background-color: #ffffff;
    font-size: .14rem;
    height: .44rem;
  }
  .warp{
    position: relative;
    margin: .07rem .14rem;
    height: .3rem;
    line-height: .3rem;
    border-radius: .15rem;
    background-color: rgba(240, 240, 240, 1);
  }
  .icon-sousuo{
    margin: 0 .09rem;
    width: .12rem;
    height: .12rem;
    vertical-align: middle;
    color: #cccccc;
  }
  .sousuo{
    background-color: rgba(240, 240, 240, 1);
  }
  .icon-quxiao{
    position: absolute;
    width: .12rem;
    height: .12rem;
    right: .1rem;
    top: 0;
    color: #cccccc;
  }
</style>
