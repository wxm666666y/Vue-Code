<template>
  <div>
    <table id="register-table">
      <tr>
        <!-- 左侧图片 -->
        <td>
          <img class="login-image" src="@/assets/images/哆啦A梦.jpeg"/>
        </td>
        <!-- 右侧登录表单 -->
        <td>
          <h2>注册</h2>
          <form action="">
            <label for="email">邮箱:</label><br>
            <input type="text" v-model="email" id="email" placeholder="邮箱/手机/用户名"><br>
            <label for="password">密码:</label><br>
            <input type="password" v-model="password" id="password" placeholder="请输入密码"><br>
            <label for="passwordRepeat">确认密码:</label><br>
            <input type="password" v-model="password" id="passwordRepeat" placeholder="请输入密码"><br>
            <label for="tel">手机号:</label><br>
            <input type="text" v-model="tel" id="tel" placeholder="请输入手机号"><br>
            <input id="reader-me" type="checkbox" v-model="checked"> 点击表示您同意商城《服务协议》<br>
            <input type="submit" @click="show" value="注册" >
          </form>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name : 'home',
    data: function(){
      return {
        checked:false,//是否同意注册协议复选框
        email:'',//电子邮箱
        password:'',//密码
        passwordRepeat:'',//确认密码
        tel:''//手机号
      }
    },
    methods: {
      mr_verify: function () {
        //获取表单对象
        var email=this.email;
        var password=this.password;
        var passwordRepeat=this.passwordRepeat;
        var tel=this.tel;
        //验证表单元素是否为空
        if(email==='' || email===null){
          alert("邮箱不能为空！");
          return;
        }
        if(password==='' || password===null){
          alert("密码不能为空！");
          return;
        }
        if(passwordRepeat==='' || passwordRepeat===null){
          alert("确认密码不能为空！");
          return;
        }
        if(tel==='' || tel===null){
          alert("手机号码不能为空！");
          return;
        }
        if(password!==passwordRepeat){
          alert("密码设置前后不一致！");
          return;
        }
        //验证邮件格式
        var apos = email.indexOf("@")
        var dotpos = email.lastIndexOf(".")
        if (apos < 1 || dotpos - apos < 2) {
          alert("邮箱格式错误！");
          return;
        }
        //验证手机号格式
        if(isNaN(tel)){
          alert("手机号请输入数字！");
          return;
        }
        if(tel.length!==11){
          alert("手机号是11个数字！");
          return;
        }
        alert('注册成功！');
        this.$router.push({name:'home'});//跳转到主页
      },
      show: function () {
        this.$router.push({name:'login'});//跳转到登录页面
      }
    }
  }
</script>
<style>
  #register-table {
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