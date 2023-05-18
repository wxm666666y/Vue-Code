<template>
  <!--订单 -->
  <div>
    <div class="concent">
      <table id="payTable">
        <caption>
          <h3>确认订单信息</h3>
        </caption>
        <thead>
          <tr>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
            <th>配送方式</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>
              <img :src="item.img" alt="{{item.name}}的图片" width="100" height="100">
              {{item.name}}
            </td>
            <td>{{item.unitPrice | formatPrice}}</td>
            <td>{{item.num}}</td>
            <td>{{item.unitPrice * item.num | formatPrice}}</td>
            <td>快递送货</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Message :totalPrice="totalPrice"/>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'//引入mapGetters
  import Message from '@/views/pay/Message'//引入组件
  export default {
    components:{
      Message//注册组件
    },
    computed: {
      ...mapGetters([
              'list'//this.list映射为this.$store.getters.list
      ]),
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
    filters: {
      formatPrice : function(value){
        return value.toFixed(2);//保留两位小数
      }
    }
  }
</script>
<style>
  #payTable {
    margin: 20px auto; /* 居中显示 */
    border-collapse: collapse;
    width: 80%;
    max-width: 800px;
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
</style>
