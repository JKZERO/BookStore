<template>
    <div>
      <div class="myinfo">
        <img class="touxian" src="https://cn.vuejs.org/images/logo.png"/>
        <div class="nick">昵称</div>
      </div>
      <my-set-box :iconclass="'icon-tianchongxing-'">全部订单</my-set-box>
      <my-set-box :iconclass="'icon-tongzhi'">我的消息</my-set-box>
      <my-set-box class="setting" :iconclass="'icon-shezhi'">设置</my-set-box>
    </div>
</template>

<script>
  import MySetBox from './components/SetBox'
  export default {
    name: "My",
    components: {
      MySetBox
    },
    data () {
      return {
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
  .myinfo{
    height: 1.34rem;
    background-color: #F05C3A;
    position: relative;
  }
  .touxian{
    width: .6rem;
    height: .6rem;
    border-radius: .3rem ;
    border: 1px solid darkred;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -.3rem -.3rem;
  }
  .nick{
    width: 100%;
    font-size: 15px;
    text-align: center;
    padding-top: 1.05rem;
    color: #ffffff;
  }
  .setting{
    margin-top: .15rem;
  }
</style>
