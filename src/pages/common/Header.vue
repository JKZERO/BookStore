<template>
    <div class="headed">
        <span v-if="hasback" class="iconfont icon-jiantou-copy"></span><slot></slot>
    </div>
</template>

<script>
    export default {
      name: "ClassifyHeader",
      props:['hasback'],
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
    z-index: 1;
    background-color: #ffffff;
    font-size: .14rem;
    line-height: .44rem;
    text-align: center;
    height: .44rem;
    font-size: 18px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .icon-jiantou-copy{
    position: absolute;
    width: .35rem;
    height: .35rem;
    top: 0;
    left: 0;
  }
</style>
