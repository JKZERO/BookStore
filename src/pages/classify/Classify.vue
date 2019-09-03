<template>
    <div>
      <classify-header :hasback="true">全部分类</classify-header>
      <div class="mainbody">
        <classify-types :list="typeList" class="classifymenu"></classify-types>
        <classify-content :list="allList" class="classifycontent"></classify-content>
      </div>
    </div>
</template>

<script>
  import ClassifyHeader from '@/pages/common/Header.vue'
  import ClassifyContent from './components/Content.vue'
  import ClassifyTypes from './components/Types.vue'
  export default {
    name: "Classify",
    components: {
      ClassifyHeader,
      ClassifyTypes,
      ClassifyContent
    },
    data () {
      return {
        typeList: [
          "文学","dsads","dasdasdas","dsad"
        ],
        allList: [
          {
            type: '小说',
            shoplist: [
              {
                url: 'https://cn.vuejs.org/images/logo.png',
                msg: '智慧启蒙勇气成长系列：铃木绘本蒲公英（亲子共读……',
                now: '￥1299',
                older: '￥1599'
              },
              {
                url: 'https://cn.vuejs.org/images/logo.png',
                msg: '智慧启蒙勇气成长系列：铃木绘本蒲公英（亲子共读……',
                now: '￥1299',
                older: '￥1599'
              },
              {
                url: 'https://cn.vuejs.org/images/logo.png',
                msg: '智慧启蒙勇气成长系列：铃木绘本蒲公英（亲子共读……',
                now: '￥1299',
                older: '￥1599'
              },
              {
                url: 'https://cn.vuejs.org/images/logo.png',
                msg: '智慧启蒙勇气成长系列：铃木绘本蒲公英（亲子共读……',
                now: '￥1299',
                older: '￥1599'
              },
              {
                url: 'https://cn.vuejs.org/images/logo.png',
                msg: '智慧启蒙勇气成长系列：铃木绘本蒲公英（亲子共读……',
                now: '￥1299',
                older: '￥1599'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .mainbody{
    font-family: PingFangSC-regular;
    padding-bottom: .49rem;
    overflow: hidden;
  }
  .classifymenu{
    float: left;
    width: .9rem;
    height: 2rem;
    margin-right: .1rem;
  }
</style>
