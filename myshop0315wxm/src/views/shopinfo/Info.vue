<template>
  <div>
    <a href="javascript:void(0)">首页&nbsp;-></a>
    <a href="javascript:void(0)">分类&nbsp;-></a>
    <span class="mr-active">内容</span>

    <!-- 放大镜 -->
    <div class="item-inform">
      <Enlarge/>

      <div class="clearfixRight">

        <!-- 规格属性 -->
        <!-- 名称 -->
        <div class="tb-detail-hd">
          <h1>
            {{ goodsInfo.name }}
          </h1>
        </div>
        <div class="tb-detail-list">
          <!-- 价格 -->
          <div class="tb-detail-price">
            <dl class="price iteminfo_price">
              <dt>促销价</dt>
              <dd><em>¥</em><b class="sys_item_price">{{ goodsInfo.unitPrice | formatPrice }}</b></dd>
            </dl>
            <dl class="price iteminfo_mktprice">
              <dt>原价</dt>
              <dd><em>¥</em><b class="sys_item_mktprice">599.00</b></dd>
            </dl>
            <div class="clear"></div>
          </div>

          <!-- 地址 -->
          <dl class="iteminfo_parameter freight">
            <dt>配送至</dt>
            <div class="iteminfo_freprice">
              <div class="mr-form-content address">
                <select data-mr-selected>
                  <option value="a">山西省</option>
                  <option value="b">吉林省</option>
                </select>
                <select data-mr-selected>
                  <option value="a">太原市</option>
                  <option value="b">长春市</option>
                </select>
                <select data-mr-selected>
                  <option value="a">尖草坪区</option>
                  <option value="b">南关区</option>
                </select>
              </div>
              <div class="pay-logis">
                快递<b class="sys_item_freprice">10</b>元
              </div>
            </div>
          </dl>

          <!-- 销量 -->
          <span class="tm-label">月销量</span><span class="tm-count">1015&nbsp;&nbsp;&nbsp;</span>
          <span class="tm-label">累计销量</span><span class="tm-count">6015&nbsp;&nbsp;</span>
          <span class="tm-label">累计评价</span><span class="tm-count">640&nbsp;&nbsp;</span>

          <!-- 各种规格 -->
          <dl class="iteminfo_parameter sys_item_specpara">
            <dt class="theme-login">
              <div class="cart-title">可选规格<span class="angle-right"></span></div>
            </dt>
            <dd>
              <div class="theme-popover-mask"></div>
              <div class="theme-popover">
                <div class="theme-popbod dform">
                  <form class="theme-signin" name="loginform" action="" method="post">
                    <div class="theme-signin-left">
                      <div class="theme-options">
                        <div class="cart-title">附加技能</div>
                        <input type="radio" value="十万伏特" checked="checked" name="g">十万伏特
                        <input type="radio" value="电网" name="g">十万伏特
                        <input type="radio" value="铁尾" name="g">十万伏特
                      </div>
                      <div class="theme-options">
                        <div class="cart-title number">数量</div>

                          <dd>
                            <input id="min" class="mr-btn mr-btn-default" @click="reduce" type="button" value="-" />
                            <input id="text_box" type="text" v-model="number" style="width:30px;" />
                            <input id="add" class="mr-btn mr-btn-default" @click="add" type="button" value="+" />
                            <span id="Stock" class="tb-hidden">库存<span class="stock">100</span>只</span>
                          </dd>
                      </div>

                      <div class="btn-op">
                        <button class="btn mr-btn mr-btn-warning">确认</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn close mr-btn mr-btn-warning">取消</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </dd>
          </dl>

          <div class="pay">
            <button id="LikBuy" title="点此按钮到下一步确认购买信息" @click="show">立即购买</button>&nbsp;&nbsp;&nbsp;
            <button id="LikBasket" title="加入购物车" @click="show">加入购物车</button>
          </div>

        </div>
      </div>
    </div>
  </div>
  <br><br><br><br>
</template>

<script>
import Enlarge from '@/views/shopinfo/Enlarge'
import { mapState, mapActions } from 'vuex' //引入mapState和mapActions
export default {
  components: {
    Enlarge
  },
  data: function() {
    return {
      number: 1, //商品数量
      goodsInfo: { //商品基本信息
        img: require("@/assets/images/pkq.jpg"),
        name: "皮卡丘",
        num: 0,
        unitPrice: 499,
        isSelect: true
      }
    }
  },
  computed: {
    ...mapState([
      'user' //this.user映射为this.$store.state.user
    ])
  },
  watch: {
    number: function(newVal, oldVal) {
      if(isNaN(newVal) || newVal == 0) { //输入的是非数字或0
        this.number = oldVal; //数量为原来的值
      }
    }
  },
  filters: {
    formatPrice: function(value) {
      return value.toFixed(2); //保留两位小数
    }
  },
  methods: {
    ...mapActions([
      'getListAction' //this.getListAction()映射为this.$store.dispatch('getListAction')
    ]),
    show: function() {
      if(this.user == null) {
        alert('亲，请登录！');
        this.$router.push({
          name: 'login'
        }); //跳转到登录页面
      } else {
        this.getListAction({ //执行方法并传递参数
          goodsInfo: this.goodsInfo,
          number: parseInt(this.number)
        });
        this.$router.push({
          name: 'shopcart'
        }); //跳转到购物车页面
      }
    },
    reduce: function() {
      if(this.number >= 2) {
        this.number--; //商品数量减1
      }

    },
    add: function() {
      this.number++; //商品数量加1
    }
  }
}
</script>