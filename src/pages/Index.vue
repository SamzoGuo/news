<template>
  <div>
    <div class="header">
      <span class="iconfont iconnew logo"></span>
      <div class="header-search">
        <span class="iconfont iconsearch"></span>
        <i>热搜新闻</i>
      </div>
      <router-link to="/personal">
        <span class="iconfont iconwode personal"></span>
      </router-link>
    </div>

    <van-tabs v-model="active" sticky swipeable>
      <van-tab v-for="(item,index) in categories" :title="item.name" :key="index">
        <PostCard v-for="index in 8" :key="index" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
export default {
  data() {
    return {
      active:localStorage.getItem('token')?1:0, //默认的标签栏
      categories:[]
    };
  },
  components: {
    PostCard
  },
  mounted() {
      const config={
        url:'/category'
      }
      if(localStorage.getItem('token')){
          config.headers={
             Authorization: localStorage.getItem("token")
          }
      }
      this.$axios(config)
      .then(res=>{
          this.categories=res.data.data
          console.log(this.categories);
      })
  }
};
</script>

<style scoped lang="less">
.header {
  background: #ff0000;
  display: flex;
  height: 50/360 * 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .logo {
    font-size: 50 / 360 * 100vw;
    color: #fff;
  }
  .personal {
    font-size: 22 / 360 * 100vw;
    color: #fff;
  }
  .header-search {
    height: 34 / 360 * 100vw;
    color: #fff;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 30px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }
  i {
    font-size: 14px;
    margin-left: 5px;
  }
}
/deep/.van-tabs__nav {
  background: #e4e4e4;
}
/deep/.van-tabs__line {
  width: 40px;
  height: 1px;
}
</style>