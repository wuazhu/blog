<template>
  <section :class="prefix">
    <div class="theme-default-content custom">
      <ArticleCard
        v-for="(post, idx) in posts" :key="post.key"
        :title="post.title"
        :excerpt="post.excerpt"
        :image="post.frontmatter.pageImg"
        :class="{'article__first': idx === 0}"
        :time="post.lastUpdated"
        @click.native="gotoDetail(post)"
      />
      <span>{{$pagination.paginationIndex+1}}/{{$pagination.length}}</span>
      <span class="pagi" v-show="$pagination.hasPrev" @click="goPage($pagination.prevLink)">上一页</span>
      <span class="pagi" v-show="$pagination.hasNext" @click="goPage($pagination.nextLink)">下一页</span>
    </div>
  </section>
</template>

<script>
import ArticleCard from '@theme/components/ArticleCard.vue'
const PREFIX = 'theme-container__right'
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
  watch: {
    $route(newValue, oldValue) {
      if (newValue.path !== oldValue.path) {
        this.posts = this.$pagination.pages;
      }
    }
  },
  methods: {
    gotoDetail({path}) {
      this.$router.push(path)
    },
    goPage(path) {
      this.$router.push(path)
    }
  },
  created() {
    this.posts = this.$pagination.pages;
  }
};
</script>