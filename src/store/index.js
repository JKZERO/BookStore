import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // 设置全局要访问的state值
  state: state,
  // 异步触发mutations里面的方法 在外部组件里进行全局执行actions里面方法的时候，
  // 你只需要用执行this.$store.dispatch('headTitle'，132)
  // 这样就可以全局改变改变标题的值了
  actions: actions,
  // 改变state里的初始值 同步的
  mutations: mutations,
  // 实时监听state值的变化
  getters: {
    //购物车列表
    carCount(state){
      let count =0
      state.car.forEach((item) => {
        if(item.selected){
          count+=item.num
        }
      })
      return count
    },
    carList(state){
      // 初始化全选状态
      if(state.all_selsect){
        state.car.forEach((item)=>{
          item.selected=true
        })
      }
      //列表变化存本地
      localStorage.setItem("search",JSON.stringify(state.car));
      return state.car
    },
    //选中商品的金额
    allMoney(state){
      let all_money=0
      state.car.forEach((item)=>{
        if(item.selected){
          all_money+=item.num*item.sellPrice
        }
      })
      return state.all_money=all_money
    },
  }
})
