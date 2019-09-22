<template>
  <div>
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <input type="password" />
    </div>
    <button>登录</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: []
    }
  }
};
</script>

<style scoped lang='less'>
//scoped 作用域样式
//lang声明样式的类型
.close{
    padding:20px;
    span{
      font-size: 27 / 360 * 100vw;
    }
  }
  .logo{
    display: flex;
    justify-content: center;
    span{
      display: block;
      font-size: 126 / 360 * 100vw;
      color: #d81e06;
    }
  }
</style>