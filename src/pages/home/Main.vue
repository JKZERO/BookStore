<template>
    <div>
      <main-header></main-header>
      <div class="mainbody">
        <main-swiper :list="swiperlist"></main-swiper>
        <div class="miantitle">热门商品</div>
        <main-content :list="shoplist"></main-content>
      </div>
    </div>
</template>

<script>
  import MainHeader from './components/Header.vue'
  import MainContent from './components/Content.vue'
  import MainSwiper from '@/pages/common/Swiper.vue'
  export default {
    name: "Main",
    components: {
      MainHeader,
      MainContent,
      MainSwiper
    },
    data () {
      return {
        shoplist: [
          {
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1688026885,2773767715&fm=26&gp=0.jpg',
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
            url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1688026885,2773767715&fm=26&gp=0.jpg',
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
        ],
        swiperlist: [
          {
            id: 0,
            imgUrl: 'https://img14.360buyimg.com/babel/s1180x940_jfs/t1/59556/21/8548/101968/5d65f592E258578e9/3413cb0c6cf72e04.jpg.webp'
          },
          {
            id: 1,
            imgUrl: 'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/71004/29/8522/87178/5d6650e7E91955f4e/2b1fa15d769b4e64.jpg.webp'
          },
          {
            id: 2,
            imgUrl: 'https://img14.360buyimg.com/babel/s1180x940_jfs/t1/59556/21/8548/101968/5d65f592E258578e9/3413cb0c6cf72e04.jpg.webp'
          },
          {
            id: 3,
            imgUrl: 'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/71004/29/8522/87178/5d6650e7E91955f4e/2b1fa15d769b4e64.jpg.webp'
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
  }
  .miantitle{
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #E51C23;
    font-size: 18px;
  }
</style>
