<template>
  <div :class='prefix'>
    <div class="theme-default-content b-content">
      <div class="posts__left"></div>
      <div class="posts__right">
        <ul>
          <li v-for="post in posts">
            {{ post.title }}
          </li>
        </ul>
        <!-- <a :href="$pagination.nextLink">下一页</a> -->
      </div>
    </div>
  </div>
</template>

<script>
const PREFIX = "theme-container posts";
export default {
  components: {},
  data() {
    return {
      prefix: PREFIX,
      posts: []
    };
  },
  created() {
    // this.posts = this.$pagination.pages;
    console.log(this.$site);
    console.log(this.$pagination);
    console.log(this.$page);
  }
};
</script>
<style lang="stylus" scoped>
.b-content
  align-items center
  display flex
  height 600px
  max-width 940px

  .posts__left
    width 200px

  .posts__right
    flex 1
</style>