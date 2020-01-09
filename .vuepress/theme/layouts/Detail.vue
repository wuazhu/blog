<template>
  <div :class='prefix'>
    <!-- <Navbar /> -->
    <h1>详情页面:</h1>
    <Content />
  </div>
</template>

<script>
// import Navbar from "@theme/components/Navbar.vue";
const PREFIX = "theme-container detail";

export default {
  name: "Detail",
  components: {
    // Navbar
  },
  data() {
    return {
      prefix: PREFIX
    };
  },
  created() {
    console.log(this.$page)
  }
};
</script>

<style lang="stylus">
.detail
  max-width 940px
  margin 0 auto
  .content__default
    img
      width 100%
</style>