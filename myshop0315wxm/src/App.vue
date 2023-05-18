<template>
  <div id="app">
    <Top/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Top from '@/components/Top'
  import Footer from "@/components/Footer";
  export default {
    name: 'app',
    components: {
      Top,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
