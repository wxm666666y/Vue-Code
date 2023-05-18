<template>
  <div class="introduceMain">
    <div class="mr-tabs" data-mr-tabs>
      <button id="infoTitle" :class="{'mr-active':current=='Details'}">
        <a @click="current='Details'">
          <span class="index-needs-dt-txt">宝贝详情</span></a>
      </button>

      <button id="commentTitle" :class="{'mr-active':current=='Comment'}">
        <a @click="current='Comment'">
          <span class="index-needs-dt-txt">全部评价</span></a>
      </button>

      <button id="youLikeTitle" :class="{'mr-active':current=='Like'}">
        <a @click="current='Like'">
          <span class="index-needs-dt-txt">猜你喜欢</span></a>
      </button>
      <div class="mr-tabs-bd">
        <component :is="current"></component>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  import Details from '@/views/shopinfo/Details'//引入组件
  import Comment from '@/views/shopinfo/Comment'//引入组件
  import Like from '@/views/shopinfo/Like'//引入组件
  export default {
    name: 'introduce',
    data: function(){
      return {
        current: 'Details'	//当前显示组件
      }
    },
    components: {
      Details,
      Comment,
      Like
    },
    methods: {
      show: function () {
        this.$router.push({name:'home'});//跳转到主页
      }
    }
  }
</script>
