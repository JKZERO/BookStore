export default {
  addGoods({commit},data){
    commit('ADDGoods',data)
  },
  addNum({commit},id){
    commit('ADDNUM',id)
  },
  jianNum({commit},id){
    commit('JIANNUM',id)
  },
  select({commit},id){
    commit('SELECT',id)
  },
  selectAll({commit}){
    commit('SELECTALL')
  },
  del({commit}){
    commit('DEL')
  },
}