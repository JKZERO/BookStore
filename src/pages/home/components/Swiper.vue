<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'MainSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 1.2rem;
    overflow: hidden;
    line-height: 1.2rem;
    text-align: center;
  }
  .swiper-img{
    width: 100%;
  }
</style>
