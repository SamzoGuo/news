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
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <PostCard v-for="(item,index) in item.posts" :post="item" :key="index" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
export default {
  data() {
    return {
      active: localStorage.getItem("token") ? 1 : 0, //默认的标签栏
      categories: [],
      cid: 999,
      // posts: [],
      // loading: false,
      // finished: false,
      // pageIndex: 1,
      pageSize: 5
    };
  },
  components: {
    PostCard
  },
  mounted() {
    //  请求栏目
    const config = {
      url: "/category"
    };
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: localStorage.getItem("token")
      };
    }
    this.$axios(config).then(res => {
      const {data} = res.data;
      //给栏目添加四个属性
      const newData=[]
         data.forEach(v=>{
        v.loading=false
        v.finished=false
        v.posts=[]
        v.pageIndex=1
        newData.push(v)
      })
      this.categories=newData
       console.log(this.categories);
       //请求文章
    this.$axios({
      url: `/post?category=${this.cid}&pageIndex=1&pageSize=${this.pageSize}`
    }).then(res => {   
      this.categories[this.active].posts = res.data.data;
       console.log(this.categories[this.active].posts);
     this.categories[this.active].pageIndex++;
    });
    });
    
  },
  //监听active获取栏目id
  watch: {
    active() {
      this.cid = this.categories[this.active].id;
      //调用onLoad
      this.onLoad()
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        const category=this.categories[this.active]
        this.$axios({
          url: `/post?category=${this.cid}&pageIndex=${category.pageIndex}&pageSize=${this.pageSize}`
        }).then(res => {
          const { data } = res.data;
          if (data.length <this.pageSize) {
            category.finished = true;
          }
         category.posts = [...category.posts, ...data];
          category.pageIndex++;
      category.loading = false;
        });
      }, 1000);
    }
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