<template>
  <div>
    <div class="card" v-for="(item,index) in list" :key="index">
      <span class="iconfont icon-xianshi_xuanzetianchong"></span>
      <img :src="item.url" />
      <span class="msg">{{item.msg}}</span>
      <span class="price">{{item.now|filterA}}</span>
      <div class="count">
        <span class="plus">-</span>
        <span class="now">0</span>
        <span class="add">+</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassifyCartCard",
    props: {
      list: Array
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
  }
  .now{
    width: 40%;
    background-color: #cccccc;
  }
</style>
