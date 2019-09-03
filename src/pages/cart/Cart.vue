<template>
    <div>
      <classify-header :hasback="false">购物车</classify-header>
      <div class="mainbody">
        <cart-card :list="cartList"></cart-card>
      </div>
      <cart-count :sum="0" :count="0"></cart-count>
    </div>
</template>

<script>
  import ClassifyHeader from '@/pages/common/Header.vue'
  import CartCard from './components/Card'
  import CartCount from './components/Count'
  export default {
    name: "Cart",
    components: {
      ClassifyHeader,
      CartCard,
      CartCount
    },
    data () {
      return {
        sum: 0,
        count: 0,
        cartList: [
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          },
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          },
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          },
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          },
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          },
          {
            url: "https://cn.vuejs.org/images/logo.png",
            msg: "先擦的撒大苏打",
            now: "￥59"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .mainbody{
    font-family: PingFangSC-regular;
    padding-bottom: 1.1rem;
    overflow: hidden;
  }
</style>
