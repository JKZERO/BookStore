import toast from 'toast2';
export default {
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
  },
  //删除选中的商品，注意这里不能使用数组删除的方法，索引值会有问题
  DEL(state){
    let flag=state.car.some((item)=>{
      return item.selected==true
    })
    if(!flag){
      Toast.text('请至少选择一个商品')
    }else{
      Dialog[0]({
        title:'确定从购物车中删除吗？',
        onOkBtn() {  //确定按钮点击事件
          this.close(); //关闭对话框
          var list=[];
          state.car.forEach((item,index)=>{
            if(!item.selected){
              list.push(item)
            }
          })
          return state.car=list
        },
      })
    }
  },
}
