<template>
  <div>
    <table id="login-table">
      <tr>
        <!-- 左侧图片 -->
        <td>
          <img class="login-image" src="@/assets/images/哆啦A梦.jpeg"/>
        </td>
        <!-- 右侧登录表单 -->
        <td>
          <h2>登录</h2>
          <form>
            <label for="user">用户名:</label><br>
            <input type="text" v-model="user" id="user" placeholder="邮箱/手机/用户名"><br>
            <label for="password">密码:</label><br>
            <input type="password" v-model="password" id="password" placeholder="请输入密码"><br>
            <input type="submit" @click="login" value="登录" >
          </form>
          <label for="remember-me"><input id="remember-me" type="checkbox">记住密码</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0)" @click="show" class="mr-fr">注册</a>
          <br>
          <h3>合作账号</h3>
          <li><a href="javascript:void(0)"><i class="qq"></i><span>QQ登录</span></a></li>
          <li><a href="javascript:void(0)"><i class="weibo"></i><span>微博登录</span> </a></li>
          <li><a href="javascript:void(0)"><i class="weixin"></i><span>微信登录</span> </a></li>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'//引入mapActions
  export default {
    name : 'home',
    data: function(){
      return {
        user:null,//用户名
        password:null//密码
      }
    },
    methods: {
      ...mapActions([
        'loginAction'//this.loginAction()映射为this.$store.dispatch('loginAction')
      ]),
      login: function () {
        var user=this.user;           //获取用户名
        var password=this.password;  //获取密码
        if(user == null){
          alert('请输入用户名！');
          return false;
        }
        if(password == null){
          alert('请输入密码！');
          return false;
        }
        if(user!=='lhry' || password!=='123456' ){
          alert('您输入的账户或密码错误！');
          return false;
        }else{
          alert('登录成功！');
          this.loginAction(user);//触发action并传递用户名
          this.$router.push({name:'home'});//跳转到主页
        }
      },
      show: function () {
        this.$router.push({name:'register'});//跳转到注册页面
      }
    }
  }
</script>
<style>
  #login-table {
    margin: 20px auto; /* 居中显示 */
    border-collapse: collapse;
    width: 80%;
    max-width: 800px;
    background-color: #39a5d0;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  td, th {
    padding: 15px;
    border: 0px solid #ddd;
    text-align: left;
    vertical-align: middle;
  }
  /* 设置图片样式 */
  .login-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
  }
</style>

