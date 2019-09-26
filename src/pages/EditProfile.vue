<template>
  <div>
    <HeaderNormal title="编辑资料"></HeaderNormal>
    <div class="head">
      <img :src="head_img" alt />
    </div>
    <!-- 调用条形组件 -->
    <CellBar label="昵称" :text="nickname" />

    <CellBar label="密码" :text="password?'******':''" />

    <CellBar label="性别" :text="gender===1?'男':'女'" />
  </div>
</template>

<script>
import HeaderNormal from "@/components/HeaderNormal";
import CellBar from "@/components/CellBar";
export default {
  data() {
    return {
      nickname: "",
      head_img: "",
      gender: "",
      password: ""
    };
  },
  components: {
    HeaderNormal,
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
      const { head_img, nickname, gender, password } = res.data.data;
      if (head_img) {
        this.head_img = this.$axios.defaults.baseURL + head_img;
      } else {
        this.head_img =
          this.$axios.defaults.baseURL + "/uploads/image/IMG1568705287936.jpeg";
      }
      this.nickname = nickname;
      this.gender = gender;
      this.password = password;
    });
  }
};
</script>

<style scoped lang='less'>
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    display: block;
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }
}
</style>