export default {
  car:localStorage["car"]?JSON.parse(localStorage["car"]): [] ,
  //购物车,涉及到刷新数据丢失，所以存了本地
  all_money:0, //总价
  all_selsect:true, //全选状态
  all_count:0, //选中的数量
}
