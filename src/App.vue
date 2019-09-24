<template>
  <!-- template最外层只能包含一个标签 -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// 必须暴露一个对象，对象是组件的配置
export default {};
</script>

<style>
/* 组件样式，会污染全局 */
/* 引入字体图标 */
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
@import url("../node_modules/vant/lib/index.css");
/* 初始化 */
* {
  margin: 0;
  padding: 0;
}
ul,
li,
ol {
  list-style: none;
}
em,
i {
  font-style: normal;
}
a {
  color: inherit;
}
a:hover {
  text-decoration: none;
}
</style>