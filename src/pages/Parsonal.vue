<template>
  <div>
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
    <CellBar label="我的关注" text="关注的用户" />

    <CellBar label="我的跟帖" text="跟帖/回复" />

    <CellBar label="我的收藏" text="文章/视频" />

    <CellBar label="设置" />
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
        this.head_img = this.$axios.defaults.baseURL+head_img;
      }else{
          this.head_img=this.$axios.defaults.baseURL+"/uploads/image/IMG1568705287936.jpeg"
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