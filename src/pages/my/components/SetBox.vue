<template>
    <div class="setBox">
      <span :class="['iconfont '+iconclass]"></span>
      <slot></slot>
      <span class="iconfont icon-arrow-right-copy"></span>
    </div>
</template>

<script>
    export default {
      name: "MySetBox",
      props:["iconclass"],
      data (){
        return {
        }
      },
      methods: {
      }
    }
</script>

<style scoped>
  .setBox{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    font-size: 14px;
    margin-bottom: 0.01rem;
    background-color: #ffffff;
  }
  .setBox span:nth-child(1){
    width: .2rem;
    height: .2rem;
    margin: .2rem;
    font-size: 20px;
  }
  .setBox span:nth-child(2){
    float: right;
    width: .16rem;
    font-size: 16px;
    height: .16rem;
    margin-right: .13rem;
  }
</style>
