<template>
  <div class="footer " style="text-align: center">
    <div class="footer-hd ">
      <p>
        <a href="http://www.lhry.com/" target="_blank">龙含日月科技</a>
        <b>|</b>
        <a href="javascript:void(0)" @click="show">商城首页</a>
        <b>|</b>
        <a href="javascript:void(0)">支付宝</a>
        <b>|</b>
        <a href="javascript:void(0)">物流</a>
      </p>
    </div>
    <div class="footer-bd ">
      <p>
        <a href="http://www.lhry.com/Index/ServiceCenter/aboutus.html" target="_blank">关于龙含日月 </a>
        <a href="javascript:void(0)">合作伙伴 </a>
        <a href="javascript:void(0)">联系我们 </a>
        <a href="javascript:void(0)">网站地图 </a>
        <em>© 从古-到未来 lhry 版权所有</em>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      show: function () {
        this.$router.push({name:'home'});//跳转到主页
      }
    }
  }
</script>
