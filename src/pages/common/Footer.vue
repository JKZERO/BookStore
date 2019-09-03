<template>
    <div class="footer">
      <ul>
        <li @click="change(index)" :class="index==on?'on':''" :key="index" v-for="(item,index) in list">
          <div :class="['iconfont '+item.class]"></div>
          <div >{{item.content}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "HomeFooter",
      props: {
        on: Number
      },
      data (){
        return {
          list: [
            {
              class: 'icon-1',
              content: '首页'
            },
            {
              class: 'icon-17',
              content: '分类'
            },
            {
              class: 'icon-icon1460345236602',
              content: '购物车'
            },
            {
              class: 'icon-icon1460345725196',
              content: '我的'
            }
          ]
        }
      },
      methods: {
        change (index) {
          this.$emit('change',index)
        }
      }
    }
</script>

<style scoped>
  .footer{
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
