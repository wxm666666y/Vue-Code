<template>
  <div class="concent" style="text-align: center">
    <div class="paycont">
      <Address/><Logistics/><Payment/><Order/>
    </div>
  </div>
</template>

<script>
  //引入组件
  import Address from '@/views/pay/Address'
  import Logistics from '@/views/pay/Logistics'
  import Payment from '@/views/pay/Payment'
  import Order from '@/views/pay/Order'
  export default {
    name : 'home',
    components : {
      Address,
      Logistics,
      Payment,
      Order,
    }
  }
</script>
