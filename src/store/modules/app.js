  import toast from "toast2";
  const app = {
    state: {
      car:localStorage["car"]?JSON.parse(localStorage["car"]): [] ,
      //购物车,涉及到刷新数据丢失，所以存了本地
      all_money:0, //总价
      all_selsect:true, //全选状态
      all_count:0, //选中的数量
    },
    actions: {
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
      }
    },
    mutations: {
      //添加商品
      ADDGoods(state,data){
        let datas={       //传入的商品属性
          title:data.title,
          img:data.img,
          num:1,
          sellPrice:data.sellPrice,
          marketPrice:data.marketPrice,
          selected:true,
          productId:data.productId
        }
        let index=-1
        index=state.car.findIndex(item=>{     //返回元素的索引位置，如果没有符合条件的元素返回 -1
          return item.productId==data.productId
        })
        if(index==-1){    //返回-1说明购物车里没有这个商品，则push进去，如果返回下标，则让此商品的数量加1
          state.car.push(datas)
        }else{
          state.car[index].num++
        }
        toast.success('添加成功！');
      },
      //购物车页面数量加减
      ADDNUM(state,productId){
        let index=state.car.findIndex(item=>{
          return item.productId==productId
        })
        return state.car[index].num++
      },
      //购物车页面数量加减
      JIANNUM(state,productId){
        let index=state.car.findIndex(item=>{
          return item.productId==productId
        })
        if(state.car[index].num<=1){
          return state.car[index].num=1
        }else{
          return state.car[index].num--
        }
      },
      //购物车单选
      SELECT(state,productId){
        let index=state.car.findIndex(item=>{
          return item.productId==productId
        })
        state.car[index].selected=!state.car[index].selected
        let flag=state.car.some((item)=>{
          return item.selected==false
        })
        if(!flag){       //如果全部选中，则全选状态也改变
          state.all_selsect=true
        }else{
          state.all_selsect=false
        }
      },
      // 购物车全选
      SELECTALL(state){
        state.all_selsect=!state.all_selsect
        if(state.all_selsect){
          state.car.forEach((item)=>{
            item.selected=true
          })
        }else{
          state.car.forEach((item)=>{
            item.selected=false
          })
        }
      }
    },
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
      }
    }
  }
  export default app
