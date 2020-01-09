<template>
  <div :class='prefix'>
    <div class="info">
      <p>©京 ICP 备 19059488 号</p>
      <p>感谢又拍云提供免费 CDN 服务</p>
    </div>
    <div class="self">
      <p>Design and developed by Wuazhu.</p>
      <p>Copyright © 2019-2020 wuazhu.cn. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
const PREFIX = "b-footer";

export default {
  name: "BFooter",
  data() {
    return {
      prefix: PREFIX
    };
  }
};
</script>
<style lang="stylus" scoped>
.b-footer
  align-items center
  display flex
  flex-direction column
  font-family 'SourceHanSanSC'
  font-size 12px
  justify-content center
  text-align center
  width 100%

  .info
    color rgb(64, 64, 64)
    opacity .6

  .self
    font-size 14px
</style>