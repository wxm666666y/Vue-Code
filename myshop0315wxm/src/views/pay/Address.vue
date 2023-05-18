<template>
  <div class="address">
    <h3>确认收货地址 </h3>

    <div class="control">
      <button class="createAddr">使用新地址</button>
    </div>
    <ul>
      <li class="defaultAddr">
        <div class="address-left">
          <div class="user DefaultAddr">
            <span class="buy-address-detail">
              <span class="buy-user">小智  </span>
              <span class="buy-phone">123456****</span>
            </span>
          </div>
          <div class="default-address DefaultAddr">
            <span class="buy-line-title buy-line-title-type">收货地址：</span>
            <span class="buy-address-detail">
              <span class="province">山西</span>省
              <span class="city">太原</span>市
              <span class="dist">尖草坪区</span>区
              <span class="street">中北大学</span>
            </span>
          </div>
          <ins class="deftip">默认地址</ins>
        </div>
        <div class="address-right">
          <a href="javascript:void(0)"></a>
        </div>
        <div class="new-addr-btn">
          <a href="javascript:void(0)" class="hidden">设为默认</a>
          |
          <a href="javascript:void(0)">编辑</a>
          |
          <a href="javascript:void(0);">删除</a>
        </div>
      </li>

<!--      <div class="per-border"></div>-->
      <li class="user-addresslist">
        <div class="address-left">
          <div class="user DefaultAddr">
            <span class="buy-address-detail">
              <span class="buy-user">小智 </span>
              <span class="buy-phone">123456****</span>
            </span>
          </div>
          <div class="default-address DefaultAddr">
            <span class="buy-line-title buy-line-title-type">收货地址：</span>
            <span class="buy--address-detail">
              <span class="province">山西</span>省
              <span class="city">太原</span>市
              <span class="dist">尖草坪</span>区
              <span class="street">中北大学</span>
            </span>
          </div>
          <ins class="deftip">默认地址</ins>
        </div>

        <div class="new-addr-btn">
          <a href="javascript:void(0)">设为默认</a>
          <span class="new-addr-bar">|</span>
          <a href="javascript:void(0)">编辑</a>
          <span class="new-addr-bar">|</span>
          <a href="javascript:void(0);">删除</a>
        </div>

      </li>

    </ul>

    <div class="clear"></div>
  </div>
</template>
<style>
  /* 相当于全局样式 */
  ul {
    list-style-type: none; /* 去掉li的默认样式 */
    padding: 0; /* 去掉ul的内边距 */
    margin: 0; /* 去掉ul的外边距 */
  }

  li {
    display: inline-block; /* 将li设置为行内块级元素 */
    margin-right: 10px; /* 设置li之间的间距 */
  }
</style>
