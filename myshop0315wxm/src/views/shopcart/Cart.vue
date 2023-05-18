<template>
  <div>
    <table id="cart-table" v-if="list.length > 0">
      <thead>
      <tr>
        <th></th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in list" :key="index">
        <td>
          <input type="checkbox" @click="selectGoods(index)" :checked="item.isSelect">
        </td>
        <td>
          <img :src="item.img" width="200" height="200"><br>
          {{item.name}}
        </td>
        <td>{{item.unitPrice | formatPrice}}</td>
        <td>
          <button @click="reduce(index)" :class="{off:item.num==1}">-</button>
          {{item.num}}
          <button @click="add(index)">+</button>
        </td>
        <td>{{item.unitPrice * item.num | formatPrice}}</td>
        <td>
          <button @click="remove(index)">删除</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>
          <input type="checkbox" @click="selectAll" :checked="isSelectAll"> 全选
        </td>
        <td colspan="2">
          <button @click="emptyCar">清空购物车</button>
        </td>
        <td colspan="3">
          已选商品<span class="totalNum">{{totalNum}}</span> 件，合计：<span class="totalPrice">¥{{totalPrice | formatPrice}}</span>
          <button @click="show('pay')">去结算</button>
        </td>
      </tr>
      </tfoot>
    </table>
    <div class="empty" v-else>
      购物车内暂时没有商品，<a @click="show('home')">去购物></a>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex'//引入mapState和mapActions
  export default{
    data: function () {
      return {
        isSelectAll : false //默认未全选
      }
    },
    mounted: function(){
        this.isSelectAll = true;//全选
        for(var i = 0;i < this.list.length; i++){
            //有一个商品未选中即取消全选
            if(this.list[i].isSelect == false){
                this.isSelectAll=false;
            }
        }
    },
    filters: {
      formatPrice : function(value){
        return value.toFixed(2);//保留两位小数
      }
    },
    computed : {
        ...mapState([
            'list'	//this.list映射为this.$store.state.list
        ]),
        totalNum : function(){ //计算商品件数
        var totalNum = 0;
        this.list.forEach(function(item){
          if(item.isSelect){
            totalNum+=1;
          }
        });
        return totalNum;
      },
      totalPrice : function(){ //计算商品总价
        var totalPrice = 0;
        this.list.forEach(function(item){
          if(item.isSelect){
            totalPrice += item.num*item.unitPrice;
          }
        });
        return totalPrice;
      }
    },
    methods : {
        ...mapActions({
            reduce: 'reduceAction',//减少商品个数
            add: 'addAction',//增加商品个数
            remove: 'removeGoodsAction',//移除商品
            selectGoodsAction: 'selectGoodsAction',//选择商品
            selectAllAction: 'selectAllAction',//全选商品
            emptyCarAction: 'emptyCarAction'//清空购物车
        }),
      selectGoods : function(index){ //选择商品
          var goods = this.list[index];
          goods.isSelect = !goods.isSelect;
          this.isSelectAll = true;
          for(var i = 0;i < this.list.length; i++){
              if(this.list[i].isSelect == false){
                  this.isSelectAll=false;
              }
          }
          this.selectGoodsAction({
              index: index,
              bool: goods.isSelect
          });

      },
      selectAll : function(){ //全选或全不选
        this.isSelectAll = !this.isSelectAll;
        this.selectAllAction(this.isSelectAll);
      },
        emptyCar: function(){//清空购物车
          if(confirm('确定要清空购物车吗？')){
              this.emptyCarAction();
          }
        },
      show: function (value) {
          if(value == 'home'){
              this.$router.push({name:'home'});//跳转到主页
          }else{
              if(this.totalNum==0){
                  alert('请至少选择一件商品！');
                  return false;
              }
              this.$router.push({name:'pay'});//跳转到支付页面
          }
      }
    }
  }
</script>
<style lang="scss">
  #cart-table {
    margin: 20px auto; /* 居中显示 */
    border-collapse: collapse;
    width: 80%;
    max-width: 800px;
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
</style>
