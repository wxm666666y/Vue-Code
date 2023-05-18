<template>
  <div class="order-go">
    <div class="pay-confirm">
      <div class="realPay">
        <em class="t">实付款：</em>
        <span class="price g_price ">
        <span>¥</span>
        <em class="style-large-bold-red">{{lastPrice | formatPrice}}</em>
      </span>
      </div>
      <div class="pay-address">
        <p class="buy-footer-address">
          <span class="buy-line-title">寄送至：</span>
          <span class="buy-address-detail">
          <span class="province">山西</span>省
              <span class="city">太原</span>市
              <span class="dist">尖草坪</span>区
              <span class="street">中北大学</span>
        </span>
        </p>
        <p class="buy-footer-address">
          <span class="buy-line-title">收货人：</span>
          <span class="buy-address-detail">
          <span class="buy-user">小智 </span>
          <span class="buy-phone">123456****</span>
        </span>
        </p>
      </div>
      <div class="submitOrder">
        <button id="J_Go" class="btn-go" @click="show">提交订单</button>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapActions} from 'vuex'//引入mapActions
  export default {
    props:['lastPrice'],//父组件传递的数据
    methods: {
        ...mapActions({
          emptyCar: 'emptyCarAction'//this.emptyCar()映射为this.$store.dispatch('emptyCarAction')
        }),
      show: function () {
          this.emptyCar();//执行清空购物车操作
        this.$router.push({name:'home'});//跳转到主页
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
.order-go {
  border: 2px solid red;
}
</style>