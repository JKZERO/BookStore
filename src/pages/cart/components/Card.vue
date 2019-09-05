<template>
  <div>
    <div class="card" v-for="(item,index) in carList" :key="index">
      <span @click='select(item.productId)'
            :class="item.selected ? 'iconfont icon-xianshi_xuanzetianchong selected' :
       'iconfont icon-xianshi_xuanzetianchong'"></span>
      <img :src="item.img" />
      <span class="msg">{{item.title}}</span>
      <span class="price">{{item.sellPrice|filterA}}</span>
      <div class="count">
        <span :class="item.num==1?'plus stop':'plus'" @click='jianNum(item.productId)'>-</span>
        <span class="now">{{item.num}}</span>
        <span class="add"  @click='addNum(item.productId)'>+</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions } from 'vuex'

  export default {
    name: "CartCard",
    methods: {
      ...mapActions(['addNum','jianNum','select'])
    },
    computed: {
      ...mapGetters(['carList'])
    },
    filters:{
      filterA:function(value) {
        return '￥'+value+'.00';
      }
    }
  }
</script>

<style scoped>
  .card{
    position: relative;
    font-size: 13px;
    margin-top: .1rem;
    height: 1.3rem;
    line-height: 1.3rem;
    background-color: #ffffff;
    overflow: hidden;
  }
  .card img{
    width: .93rem;
    margin-right: .12rem;
    vertical-align: middle;
  }
  .icon-xianshi_xuanzetianchong{
    font-size: .18rem;
    margin: .56rem .12rem;
  }
  .msg{
    line-height: .13rem;
    position: absolute;
    top: .22rem;
    left: 42%;
  }
  .price{
    font-size: 23px;
    line-height: .16rem;
    position: absolute;
    bottom: .18rem;
    left: 42%;
    color: #F23030;
  }
  .count{
    width: .86rem;
    height: .24rem;
    line-height: .24rem;
    position: absolute;
    bottom: .18rem;
    right: .05rem;
    border: 1px solid #999999;
  }
  .add,.plus,.now{
    display: block;
    float: left;
    text-align: center;
  }
  .add,.plus{
    width: 30%;
    font-size: 22px;
    background-color: #ffffff;
  }
  .now{
    width: 40%;
    background-color: #cccccc;
  }
  .selected{
    color: #E51C23;
  }
  .stop{
    color: #cccccc;
  }
</style>
