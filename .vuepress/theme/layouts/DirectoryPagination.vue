<template>
  <div :class='prefix'>
    <div class="theme-default-content custom b-content">
      <div class="posts__left">
        <img src="" alt="">
      </div>
      <div class="posts__right">
        <ArticleCard
          v-for="post in posts" :key="post.key"
          :title="post.title"
          :excerpt="post.excerpt"
          :image="post.frontmatter.pageImg"
          @click.native="gotoDetail(post)"
        />
        <a v-show="$pagination.prevLink" :href="$pagination.prevLink">上一页</a>
        <a v-show="$pagination.nextLink" :href="$pagination.nextLink">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@theme/components/ArticleCard.vue'
const PREFIX = "theme-container posts";
export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      prefix: PREFIX,
      posts: []
    };
  },
  methods: {
    gotoDetail({path}) {
      // console.log(post)
      this.$router.push(path)
    }
  },
  created() {
    this.posts = this.$pagination.pages;
    console.log(this.$site);
    console.log(this.$pagination.pages);
    console.log(this.$page);
  }
};
</script>
<style lang="stylus" scoped>
.b-content
  align-items center
  display flex
  // max-width 940px

  .posts__left
    width 200px

  .posts__right
    flex 1
</style>