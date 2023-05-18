import { createStore } from 'vuex'

export default createStore({
  state: {
    user: sessionStorage.getItem('user'),  //定义用户名
    isLogin: sessionStorage.getItem('isLogin'),  //定义用户是否登录
    list : sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):[{
      img : require("@/assets/images/pkq.jpg"),
      name : "皮卡丘 十万伏特",
      num : 1,
      unitPrice : 499,
      isSelect : true
    },{
      img : require("@/assets/images/杰尼龟.png"),
      name : "杰尼龟 高压水枪",
      num : 1,
      unitPrice : 498,
      isSelect : true
    }]
  },
  getters: {
    length: function (state) {
      return state.list.length;
    },
    list: function (state) {
      var payList = state.list.filter(function (item) {
        if(item.isSelect==true){
          return item;
        }
      })
      return payList;
    }
  },
  mutations: {
    login: function(state, user){
      state.user = user;//修改状态
      state.isLogin = true;//修改状态
      sessionStorage.setItem('user',user);//保存用户名
      sessionStorage.setItem('isLogin',true);//保存用户登录状态
    },
    logout: function(state){
      state.user = null;//修改状态
      state.isLogin = false;//修改状态
      sessionStorage.removeItem('user');//删除用户名
      sessionStorage.removeItem('isLogin');//删除用户登录状态
    },
    getList: function(state, obj){
      var arr = [];
      state.list.forEach(function (item) {
        arr.push(item.name);
      });
      if(arr.indexOf(obj.goodsInfo.name) == -1){
        obj.goodsInfo.num += obj.number;
        state.list.unshift(obj.goodsInfo);
      }else{
        state.list[arr.indexOf(obj.goodsInfo.name)].num += obj.number;
      }
      sessionStorage.setItem('list',JSON.stringify(state.list));
      //state.list = JSON.parse(sessionStorage.getItem('list'));
    },
    removeGoods: function (state,index) {
      state.list.splice(index,1);
      sessionStorage.setItem('list',JSON.stringify(state.list));
    },
    selectGoods: function (state,obj) {
      state.list[obj.index].isSelect = obj.bool;
      sessionStorage.setItem('list',JSON.stringify(state.list));
    },
    selectAll: function (state,bool) {
      for(var i = 0;i < state.list.length; i++){
        state.list[i].isSelect = bool;
      }
      sessionStorage.setItem('list',JSON.stringify(state.list));
    },
    reduce: function (state,index) {
      var goods = state.list[index];
      if(goods.num >= 2){
        goods.num--;
      }
      sessionStorage.setItem('list',JSON.stringify(state.list));
    },
    add: function (state,index) {
      var goods = state.list[index];
      goods.num++;
      sessionStorage.setItem('list',JSON.stringify(state.list));
    },
    emptyCar: function (state) {
      state.list.splice(0,state.list.length);
      sessionStorage.setItem('list',JSON.stringify(state.list));
    }
  },
  actions: {
    loginAction: function(context, user){
      context.commit('login', user);//提交mutation
    },
    logoutAction: function(context){
      context.commit('logout');//提交mutation
    },
    getListAction: function(context, obj){
      context.commit('getList', obj);
    },
    removeGoodsAction: function(context, index){
      context.commit('removeGoods', index);
    },
    selectGoodsAction: function(context, obj){
      context.commit('selectGoods', obj);
    },
    selectAllAction: function(context, bool){
      context.commit('selectAll', bool);
    },
    reduceAction: function(context, index){
      context.commit('reduce', index);
    },
    addAction: function(context, index){
      context.commit('add', index);
    },
    emptyCarAction: function(context){
      context.commit('emptyCar');
    }
  }
})
