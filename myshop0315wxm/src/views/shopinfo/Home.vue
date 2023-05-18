<template>
  <div>
    <b class="line"></b>
      <div class="nav-table">
        <Nav/>
      </div>
    <Info/>
    <introduce/>
  </div>
</template>

<script>
// @是/src的别名
import Info from '@/views/shopinfo/Info'
import Introduce from "@/views/shopinfo/Introduce";

export default {
  name: 'home',
  components: {
    Info,
    Introduce
  }
}
</script>

