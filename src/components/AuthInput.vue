<template>
  <input
    class="input"
    :class="{
        success: status === 'success',
        error: status === 'error'
    }"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script>
export default {
  data() {
    return {
      status: ""
    };
  },
  // rule传递过来的正则表达式
  props: ["placeholder", "value", "name", "err_message", "rule"],
  mounted() {},
  methods: {
    handleInput(event) {
      const { value } = event.target;

      // 触发父组件的input事件，返回输入框的值
      this.$emit("input", value);

      // 如果符合正则就位success，反之是error
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "success";
        } else {
          this.status = "error";
        }
      }
    },

    // 输入框失去焦点时候触发
    handleChange() {
      if (this.err_message && this.status === "error") {
        this.$toast.fail(this.err_message);
      }
    }
  }
};
</script>

<style scoped lang="less">
.input {
  width: 100%;
  height: 38 / 360 * 100vw;
  padding: 20px 0;
  box-sizing: border-box;
  background: #fff;
  border: none;
  border-bottom: 2px #666 solid;
  outline: none;
  font-size: 18px;
}
.success {
  border-bottom-color: blue;
}
.error {
  border-bottom-color: red;
}
</style>