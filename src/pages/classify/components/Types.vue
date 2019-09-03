<template>
  <div>
    <ul>
      <li :class="index == 0 ?  'type active' :  'type'" v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ClassifyTypes",
    props: {
      list: Array
    }
  }
</script>

<style scoped>
  .type{
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: 13px;
  }
  .active{
    color: #E51C23;
  }
</style>
