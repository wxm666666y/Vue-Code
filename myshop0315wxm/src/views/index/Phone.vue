<template>
  <!--手机-->
  <div id="f1">
    <div class="mr-container ">
      <div class="shopTitle ">
        <h3>手机&nbsp;&nbsp;</h3>
        <h5>手机风暴</h5>
        <hr>
        <div class="today-brands ">
          <a href="javascript:void(0)" v-for="item in brands" :key="item">{{item}}&nbsp;&nbsp;&nbsp;</a>
        </div>
        <span class="more ">
          <a href="javascript:void(0)">更多手机</a>
        </span>
      </div>
    </div>
    <div class="mr-g-fixed floodFive ">
      <div class="mr-u-sm-5 mr-u-md-3 text-one list">
        <div class="word">
          <a class="outer" href="javascript:void(0)" v-for="item in cores" :key="item">
            <span class="inner"><b class="text">{{item}}&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
          </a>
        </div>

        <div class="triangle-topright"></div>
      </div>
      <div class="text-two">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/oppo.jpg"/></a>
        <div class="outer-con ">
          <div class="title ">
            荣耀8
          </div>
          <div class="sub-title ">
            ¥5888.00
          </div>
        </div>

      </div>
      <div class="text-three sug">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"></a>
        <div class="outer-con ">
          <div class="title ">
            一加手机
          </div>
          <div class="sub-title ">
            ¥2499.00
          </div>
        </div>
      </div>

      <div class="text-three big">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/oppo.jpg"></a>
        <div class="outer-con ">
          <div class="title ">
            红米
          </div>
          <div class="sub-title ">
            ¥1199.00
          </div>
        </div>
      </div>

      <div class="text-five">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/xiaomi.jpg"></a>
        <div class="outer-con ">
          <div class="title ">
            LG G5
          </div>
          <div class="sub-title ">
            ¥2999.00
          </div>
        </div>
      </div>
      <div class="text-six">
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/oppo.jpg"></a>
        <div class="outer-con ">
          <div class="title ">
            苹果4s手机
          </div>
          <div class="sub-title ">
            ¥2099.00
          </div>
        </div>
      </div>
    </div>
    <div class="clear "></div>
  </div>
  <br><br><br>
</template>
<script>
export default {
  name: 'phone',
  data: function(){
    return {
      //手机品牌数组
      brands: ['小米','荣耀','乐视','魅族','联想','OPPO'],
      //手机核数数组
      cores: ['十核','八核','双四核','四核','双核','单核']
    }
  },
  methods: {
    show: function () {
      this.$router.push({name:'shopinfo'});//跳转到商品详情页面
    }
  }
}
</script>
<style>
  #f1 .mr-g-fixed {
    display: flex;
    flex-wrap: wrap;
  }

  #f1 .text-one,
  #f1 .text-two,
  #f1 .text-three,
  #f1 .text-five{
    flex-basis: 33.3333%;
    max-width: 33.3333%;
    box-sizing: border-box;
    padding: 10px;
  }

</style>
