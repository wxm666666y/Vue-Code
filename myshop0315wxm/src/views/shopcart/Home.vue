<template>
  <div class="box">
    <div class="title">
    </div>
    <Cart/>
  </div>
</template>

<script>
  //引入组件
  import Cart from '@/views/shopcart/Cart'
  export default {
    name : 'home',
    components : {
      Cart,
    }
  }
</script>

