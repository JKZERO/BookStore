<template>
    <div>
      <ul class="warp">
        <li class="box" v-for="(item,index) in list" :key="index">
          <img :src="item.url" />
          <p>{{item.msg}}</p>
          <div>
            <span>{{item.now}}</span>
            <span>{{item.older}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "MainContent",
    props: {
      list: Array
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .warp{
    overflow: hidden;
  }
  .box{
    float: left;
    width: 48%;
    height: 2.54rem;
    margin: 1%;
    background-color: #ffffff;
    text-align: center;

  }
  .box img{
    margin: .13rem;
    width: 80%;
    max-width: 80%;
    height: 56%;
    vertical-align: middle;
  }
  .box p{
    margin: .06rem .13rem;
    height: .44rem;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box div{
    position: relative;
    height: .22rem;
    line-height: .22rem;
    margin: .06rem .13rem;
  }
  .box div span:nth-child(1){
    color: #E51C23;
    font-size: 15px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box div span:nth-child(2){
    color: #999999;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: line-through;
  }
</style>
