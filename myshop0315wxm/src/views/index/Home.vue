<template>
  <div>
    <Activity/><Phone/><Computer/>
  </div>
</template>

<script>
// @是/src的别名
import Activity from "@/views/index/activity";
import Phone from "@/views/index/Phone";
import Computer from "@/views/index/Computer";

export default {
  name: 'home',
  components: {
    Activity,
    Phone,
    Computer,
  }
}
</script>
