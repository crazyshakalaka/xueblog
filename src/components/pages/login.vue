<template>
  <div id="login">
    <h2>朋友，把握现在</h2>
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <div class="form">
          <h1>注册</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa fa-weibo"></i></a>
            <a href="#" class="social"><i class="fa fa-weixin"></i></a>
            <a href="https://github.com/crazyshakalaka" class="social"><i class="fa fa-github"></i></a>
          </div>
          <span>第三方账号注册</span>
          <input type="text" v-model="username" placeholder="昵称"/>
          <input type="password" id="em" v-model="password" placeholder="密码"/>
          <input type="password" v-model="rePassword" name="password" @keyup.enter="register" placeholder="二次密码"/>
          <button id="re" @click="register">注册</button>
        </div>
      </div>
      <div class="form-container sign-in-container">
        <div class="form">
          <h1>登录</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa fa-weibo"></i></a>
            <a href="#" class="social"><i class="fa fa-weixin"></i></a>
            <a href="https://github.com/crazyshakalaka" class="social"><i class="fa fa-github"></i></a>
          </div>
          <span>第三方账号登录</span>
          <input type="text" v-model="username" id="un1" name="username" placeholder="昵称"/>
          <input type="password" v-model="password" id="pw1" @keyup.enter="loginIn" name="password" placeholder="密码"/>
          <a href="#">忘记密码？</a>
          <button @click="loginIn">登录</button>
          <span class='userinfo' @click="getUserInfo">获取用户信息</span>
          <span class="logout" @click="logOut">退出登陆</span>
        </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>欢迎回来！</h1>
            <p>请您先登录的个人信息，进行操作。</p>
            <button class="ghost" id="signIn">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>你好朋友！</h1>
            <p>输入您的个人信息注册。</p>
            <button class="ghost" id="signUp">注册</button>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>
        欢迎进入薛奎浩的博客
      </p>
    </footer>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css'
  import {login, userInfo, logOut, register} from "../../api/login";

  export default {
    data() {
      return {
        username: '',
        password: '',
        rePassword: ''
      }
    },
    mounted() {
	      let signUpButton = document.getElementById('signUp');
				let signInButton = document.getElementById('signIn');
				let container = document.getElementById('container');
				
				signUpButton.addEventListener('click', () => {
					container.classList.add("right-panel-active");
				});
				
				signInButton.addEventListener('click', () => {
					container.classList.remove("right-panel-active");
				});
    },
    methods: {
      register() {
        register({
          username: this.username,
          password: this.password,
          rePassword: this.rePassword,
        }).then(res => {
          if (res.code === 0) {
            this.$notify.success('注册成功')
          } else {
            this.$notify.error(res.msg)
          }
        })
      },
      loginIn() {
        login({
          username: this.username,
          password: this.password
        }).then(res => {
          if (res.code === 0) {
            this.$notify.success('登陆成功')
            if (parseInt(res.data.type) > 0)
              this.$router.push({
                name: 'admin'
              })
            else
              this.$router.push({
                name: 'blog'
              })
          } else {
            this.$notify.error(res.msg)
          }
        })
      },
      getUserInfo() {
        userInfo().then(res => {
          console.log(res)
          if (res.code === 0) {
            this.$notify.success(res.data.username)
          } else {
            this.$notify.error(res.msg)
          }
        })
      },
      logOut() {
        logOut().then(res => {
          console.log(res)
          if (res.code === 0) {
            this.$notify.success(res.msg)
            this.$router.push({
                name: 'blog'
              })
          } else {
            this.$notify.error(res.msg)
          }
        })
      }
    },
  }
</script>

<style scoped>
  /*@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');*/
  * {
    box-sizing: border-box;
  }

  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    /* 	text-decoration: none; */
    margin: 15px 0;
  }

  .social-container a {
    text-decoration: none;
    font-size: 25px;
  }

  button {
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
  }

  .form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    left: 21.5%;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #FF416C;
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
    background: linear-gradient(to right, #FF4B2B, #FF416C);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
  }

  .social-container a {
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }

  footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  }

  footer p {
    margin: 10px 0;
  }

  footer i {
    color: red;
  }

  footer a {
    color: #3c97bf;
    text-decoration: none;
  }
  .userinfo{
  	margin-top: 20px;

  }
.userinfo:hover{
 cursor: pointer;
 color: #3C97BF;
  }
.logout{
 margin-top: 10px;
  }
.logout:hover{
  cursor: pointer;
  color: #3C97BF;
}
</style>
