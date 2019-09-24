<template>
  <div>
    <div class="profile">
      <img src="http://img0.imgtn.bdimg.com/it/u=4289678215,1835674179&fm=26&gp=0.jpg" alt />
      <div class="profile_center">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          火星网友
        </div>
        <div class="time">2019-9-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {};
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