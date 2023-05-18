<template>
  <div class="hmtop">
    <!--顶部导航条 -->
    <div class="mr-container header">
      <ul class="message-l">
        <div class="topMessage">
          <div class="menu-hd">
            <a @click="show('login')" target="_top" class="h" style="color: red" v-if="!isLogin">亲，请登录</a>

            <span v-else style="color: green">{{user}}，欢迎您 <a @click="logout" style="color: red">退出登录</a></span>
            <a @click="show('register')" target="_top" style="color: red; margin-left: 20px;">免费注册</a>

            <a href="#" target="_top" class="h" style="color:red; margin-left: 800px;">商城首页</a>
            <a href="#" target="_top" style="margin-left: 20px;">个人中心</a>
<!--            <a href="" id="mc-menu-hd" @click="" target="_top">-->
            <a id="mc-menu-hd" @click="show('shopcart')" target="_top">
              <span style="color:red; margin-left: 20px;">购物车</span>
              <strong id="J_MiniCartNum" class="h" v-if="isLogin">{{length}}</strong>
            </a>
            <a href="#" target="_top" style="color:red; margin-left: 20px;">
              <span>收藏夹</span>
            </a>
          </div>
        </div>
      </ul>
    </div>
    <!--悬浮搜索框-->
    <div class="nav white">
      <div class="logoBig" style="text-align: center;">
        <img @click="show('home')" src="@/assets/images/logobig.png"/>
        <input id="searchInput" name="sysc" type="text" placeholder="搜索" autocomplete="off">
        <input id="ai-topsearch" class="submit mr-btn" value="搜索" index="1" type="submit">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'//引入辅助函数

  export default {
    name: 'Top',

    computed: {
      ...mapState([
          'user',
          'isLogin'
      ]),
      ...mapGetters([
          'length'
      ])
    },

    methods: {
      //用来进行页面跳转,通过对比value值来确定跳转位置
      show: function (value) {
        if(value == 'shopcart'){
          if(this.user == null){//用户未登录
            alert('亲，请登录！');
            this.$router.push({name:'login'});//跳转到登录页面
            return false;
          }
        }
        this.$router.push({name:value});
      },
      ...mapActions([
        'logoutAction'//this.logoutAction()映射为this.$store.dispatch('logoutAction')
      ]),
      logout: function () {
        if(confirm('确定退出登录吗？')){
          this.logoutAction();//执行退出登录操作
          this.$router.push({name:'home'});//跳转到主页
        }else{
          return false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
