<template>
    <div>
      <classify-header :hasback="false">购物车</classify-header>
      <div class="mainbody">
        <cart-card></cart-card>
      </div>
      <cart-count></cart-count>
    </div>
</template>

<script>
  import ClassifyHeader from '@/pages/common/Header.vue'
  import CartCard from './components/Card'
  import CartCount from './components/Count'
  import {mapActions } from 'vuex'
  export default {
    name: "Cart",
    components: {
      ClassifyHeader,
      CartCard,
      CartCount
    },
    data () {
      return {
      }
    },
    methods: {
      ...mapActions(['addGoods']),   //es6的扩展运算符
      // 加入购物车
      addCar:function(datas){
        this.addGoods(datas)
      }
    },
    mounted() {
      let datas={       //传入的商品属性
        title: '好东西',
        img: 'https://cn.vuejs.org/images/logo.png',
        num:1,
        sellPrice: 1599,
        marketPrice: 2599,
        selected:true,
        productId: Math.random()*100000000
      }
      this.addCar(datas)
    }
  }
</script>

<style scoped>
  .mainbody{
    padding-top: .44rem;
    font-family: PingFangSC-regular;
    padding-bottom: 1.1rem;
    overflow: hidden;
  }
</style>
