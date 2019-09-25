<template>
  <div class="container">
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="inputs">
      <!-- 输入框组件 -->
      <AuthInput
        placeholder="手机号码"
        :value="form.username"
        @input="handleUsername"
        :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
      ></AuthInput>
      <AuthInput
        placeholder="密码"
        type='password'
        v-model="form.password"
        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不正确"
      ></AuthInput>
    </div>
      <p class="tips">
        没有账号？ 
        <router-link to="/register">去注册</router-link>
      </p>
    <AuthButton text="登录" @click="handleSubmit"/>
  </div>
</template>

<script>
//  导入输入框组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
// import { log } from 'util';
export default {
  data() {
    return {
      // 发送给后台的数据
      form: {
        username: "",
        password: ""
      }
    };
  },
  // 注册组件
  components: {
    AuthInput,
    AuthButton
  },
  methods: {
    // 传递给输入框组件，用于获取用户名
    handleUsername(value) {
      this.form.username = value;
    },
    // 表单提交
    handleSubmit() {
      this.$axios({
        url: "/login",
        method: "POST",  // method相当于type
        data: this.form
        // .then的回调函数相当于success
      }).then( res => {  
        const {message,data}=res.data
        if(message=='登录成功'){
          //保存token。user_id到浏览器本地存储
          localStorage.setItem('token',data.token)
          localStorage.setItem('user_id',data.user.id)
          this.$router.push('/parsonal')
        }
      })
    }
  }
};
</script>

<style scoped lang='less'>
//scoped 作用域样式,2
//lang声明样式的类型
.container {
  padding: 20px;
}
.close {
  padding: 20px;
  span {
    font-size: 27 / 360 * 100vw;
  }
}
.logo {
  display: flex;
  justify-content: center;
  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}
.inputs {
  input {
    margin-bottom: 20px;
  }
}
  .tips{
    text-align: right;
    margin-bottom: 20px;
    a{
      color:#3385ff;
    }
  }
</style>