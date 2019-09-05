<template>
    <div class="footer">
      <ul>
          <router-link tag="li" :to="item.to"
                       :class="{on:index==activeindex}"
                       :key="index" v-for="(item,index) in list">
              <div :class="['iconfont '+item.class]"></div>
              <div >{{item.content}}</div>
          </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "HomeFooter",
      data (){
        return {
          list: [
            {
              class: 'icon-1',
              content: '首页',
              to: '/'
            },
            {
              class: 'icon-17',
              content: '分类',
              to: '/Classify'
            },
            {
              class: 'icon-icon1460345236602',
              content: '购物车',
              to: '/Cart'
            },
            {
              class: 'icon-icon1460345725196',
              content: '我的',
              to: '/My'
            }
          ]
        }
      },
      methods: {
      },
      computed: {
        activeindex (value) {
          return this.list.findIndex((item,index) => {
            return item.to===this.$route.fullPath
          })
        }
      }
    }
</script>

<style scoped>
  .footer{
    color: #000000;
    width: 100%;
    background-color: #ffffff;
    font-size: 14px;
    height: .49rem;
    line-height: .25rem;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .footer ul{
    width: 100%;
    overflow: hidden;
  }
  .footer li{
    text-align: center;
    float: left;
    width: 25%;
    height: .45rem;
    margin: 0;
  }
  .footer li div{
    margin: 0 auto;
    height: .225rem;
    display: block;
  }
  .on{
    color: #F23030;
  }
</style>
