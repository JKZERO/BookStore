<template>
    <div class="warp">
      <div v-for="(item,index) in list" :key="index">
        <div class="title">
          <span class="titlespan">{{item.type}}</span>
          <strong>全部<span class="iconfont icon-arrow-right-copy"></span></strong>
        </div>
        <main-content :list="item.shoplist"></main-content>
      </div>
    </div>
</template>

<script>
  import MainContent from '../../home/components/Content.vue'
  export default {
    name: "ClassifyContent",
    components: {
      MainContent
    },
    props: {
      list: Array
    }
  }
</script>

<style scoped>
  .warp{
    overflow: hidden;
  }
  .title{
    position: relative;
    height: .32rem;
    line-height: .32rem;
    margin: .1rem 0;
    font-size: 13px;
    color: #333333;
  }
  .titlespan{
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
  }
  .title strong{
    position: absolute;
    top: 0;
    right: 0;
    color: #999999;
  }
</style>
