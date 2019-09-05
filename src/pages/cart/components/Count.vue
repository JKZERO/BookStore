<template>
    <div class="count">
      <span @click="selectAll()" :class="
      allSelsect?'iconfont icon-xianshi_xuanzetianchong selected':'iconfont icon-xianshi_xuanzetianchong'"></span>
      <span class="allcheck">全选</span>
      <span class="sum">合计:￥{{allMoney}}.00</span>
      <span class="btn">去结算({{carCount}})</span>
    </div>
</template>

<script>
  import {mapGetters,mapActions } from 'vuex'
  export default {
    name: "CartCount",
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['allMoney','carCount']),
      allSelsect () {
        return this.$store.state.app.all_selsect
      }
    },
    methods: {
      ...mapActions(['selectAll'])
    }
  }
</script>

<style scoped>
  .count{
    position: relative;
    background-color: #ffffff;
    width: 100%;
    height: .49rem;
    line-height: .49rem;
    position: fixed;
    left: 0;
    bottom: .54rem;
    vertical-align: middle;
  }
  .icon-xianshi_xuanzetianchong{
    font-size: .18rem;
    margin: .56rem 0 .56rem .12rem;
  }
  .allcheck{
    font-size: 12px;
  }
  .sum{
    font-size: 16px;
    margin-left: .1rem;
  }
  .btn{
    position: absolute;
    width: 1.25rem;
    text-align: center;
    background-color: #E51C23;
    color: #ffffff;
    right: 0;
    bottom: 0;
    font-size: 14px;
  }
  .selected{
    color: #E51C23;
  }
</style>
