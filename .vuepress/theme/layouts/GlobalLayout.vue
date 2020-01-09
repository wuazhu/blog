<template>
  <div class="global-layout">

    <component :is="layout" />
    <BFooter />
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    }
  }
};
</script>

<style lang="stylus" scoped>
.global-layout
  display flex
  flex-direction column
  min-height 100vh

  .theme-container
    flex 1
</style>