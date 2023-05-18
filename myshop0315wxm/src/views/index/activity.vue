<template>
  <div class="mr-container activity ">
    <div class="shopTitle ">
      <h3>活动&nbsp;</h3>
      <h5> 每期活动 优惠享不停 </h5>
      <span class="more ">
        <a href="javascript:void(0)">全部活动<i class="mr-icon-angle-right" style="padding-left:10px ;"></i></a>
      </span>
    </div>
    <hr>
    <div class="mr-g mr-g-fixed ">
      <div class="mr-u-sm-3 ">
        <div class="icon-sale one "></div>
        <h4>秒杀</h4>

        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"/></a>
        </div>
        <div class="info ">
          <h3><a href="javascript:void(0)" @click="show">春节送礼优选</a></h3>
        </div>
      </div>

      <div class="mr-u-sm-3 ">
        <div class="icon-sale two "></div>
        <h4>特惠</h4>

        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"></a>
        </div>
        <div class="info ">
          <a href="javascript:void(0)" @click="show"><h3>春节送礼优选</h3></a>
        </div>
      </div>

      <div class="mr-u-sm-3 ">
        <div class="icon-sale three "></div>
        <h4>团购</h4>
        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"></a>
        </div>
        <div class="info ">
          <a href="javascript:void(0)" @click="show"><h3>春节送礼优选</h3></a>
        </div>
      </div>

      <div class="mr-u-sm-3 last ">
        <div class="icon-sale "></div>
        <h4>超值</h4>
        <div class="activityMain ">
          <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"></a>
        </div>
        <div class="info ">
          <a href="javascript:void(0)" @click="show"><h3>春节送礼优选</h3></a>
        </div>
      </div>

    </div>
  </div>
  <br><br><br>
</template>

<script>

export default {
  name: 'activity',
  methods: {
    show: function () {
      this.$router.push({name:'shopinfo'});
    }
  }
}
</script>

<style lang="scss">
  .mr-g {
    display: flex;
    flex-wrap: wrap;
  }

  .mr-u-sm-3 {
    flex-basis: 25%; /* 一行最多显示4个，每个宽度为 25% */
  }

  .activityMain img {
    max-width: 100%; /* 确保图片在容器内完全显示 */
  }

  .shopTitle {
    display: flex;
    justify-content: space-between;
  }

  .more {
    margin-left: auto;
  }
</style>
