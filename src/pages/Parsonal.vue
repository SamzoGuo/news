<template>
  <div>
    <router-link to="/edit_profile">
      <div class="profile">
        <img :src="head_img" alt />
        <div class="profile_center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>
            {{nickname}}
          </div>
          <div class="time">2019-9-24</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <CellBar label="我的关注" text="关注的用户" />

    <CellBar label="我的跟帖" text="跟帖/回复" />

    <CellBar label="我的收藏" text="文章/视频" />

    <CellBar label="退出" @click="handleLogout" />
  </div>
</template>

<script>
import CellBar from "@/components/CellBar";
export default {
  data() {
    return {
      nickname: "",
      head_img: "",
      gender: ""
    };
  },
  components: {
    CellBar
  },
  methods: {
    // 退出登录
    handleLogout() {
      //清除本地的token和user_id
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      //replace替换上一个页面
      this.$router.replace("/login");
    }
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/user/" + localStorage.getItem("user_id"),
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      const { head_img, nickname, gender } = res.data.data;
      if (head_img) {
        this.head_img = this.$axios.defaults.baseURL + head_img;
      } else {
        this.head_img =
          this.$axios.defaults.baseURL + "/uploads/image/IMG1568705287936.jpeg";
      }
      this.nickname = nickname;
      this.gender = gender;
    });
  }
};
</script>

<style scoped lang='less'>
.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 5px #eee solid;
  img {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
  }
  .profile_center {
    flex: 1;
    padding: 0 10px;
  }
  .name {
    span {
      color: #75b9eb;
    }
  }
  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>