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
    background-color: #ffffff;
    font-size: .14rem;
    line-height: .44rem;
    text-align: center;
    height: .44rem;
    position: relative;
    font-size: 18px;
  }
  .icon-jiantou-copy{
    position: absolute;
    width: .35rem;
    height: .35rem;
    top: 0;
    left: 0;
  }
</style>
