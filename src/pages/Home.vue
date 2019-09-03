<template>
  <div>
    <router-view></router-view>
    <home-footer @change="change" :on="on"></home-footer>
  </div>
</template>

<script>
  import HomeFooter from './common/Footer.vue'
  export default {
    name: "Home",
    components: {
      HomeFooter
    },
    data () {
      return {
        on: 0,
        routerlist: [
          '/','/Classify','/Cart','/My'
        ]
      }
    },
    methods: {
      change (index) {
        this.on = index
        this.$router.push(this.routerlist[index])
      }
    },
    mounted() {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
      this.routerlist.map((item,index) => {
        if(item === this.$route.fullPath){
          this.on = index
        }
      })
    },
  }
</script>

<style scoped>
</style>
