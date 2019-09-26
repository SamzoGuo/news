<template>
  <div class="card">
    <div class="card-left">
      <div class="post-title">林志玲穿透视黑纱裙米兰看腹部微隆显孕味林志玲穿透视黑纱裙米兰看腹部微隆显孕味</div>
      <p class="post-info">
        <span>火星时报</span>
        <span>100跟帖</span>
      </p>
    </div>
    <div class="card-img">
        <img src="http://img0.imgtn.bdimg.com/it/u=1041057022,2271638432&fm=26&gp=0.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.card {
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  .card-left {
    flex: 1;
    .post-title {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .post-info {
      font-size: 12px;
      color: #999;
    }
  }
  .card-img {
    img {
      display: block;
      width: 120 / 360 * 100vw;
      height: 80 / 360 * 100vw;
      object-fit: cover;
    }
  }
}
</style>