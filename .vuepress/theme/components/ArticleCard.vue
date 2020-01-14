<template>
  <article :class='prefix'>
    <section class="article-wrap">
      <section class="article__txt">
        <h2 class="article-title">{{title}}</h2>
        <div class="article__excerpt">
          <div v-html="excerpt"></div>
          <p class="public__time">{{time}} 发布</p>
        </div>
      </section>
      <section class="article__img">
        <img :src="image" alt="image">
      </section>
    </section>
  </article>
</template>

<script>
  const PREFIX = 'article'

  export default {
    nname: 'ArticleCard',
    props: {
      title: {
        type: String,
        default: '标题'
      },
      excerpt: {
        type: String,
        default: '没有介绍信息- -\\'
      },
      image: {
        type: String,
        default: 'http://www.wuazhu.cn/images/202016_crgdRB.png'
      },
      time: {
        type: String,
        default: '2020-09-11'
      }
    },
    computed: {
      articleStyl() {
        return`
          background: url(${this.image});
          backgroundPosition: 'cover'
        `
      }
    },
    data() {
      return {
        prefix: PREFIX
      }
    },
  }
</script>
<style lang="stylus">
.article
  padding-top 2rem
  margin-bottom 3rem
  cursor pointer
  transition all 1s ease-out
  opacity 1
  &.article__first
    padding-top 0
  .public__time
    font-size 13px
    opacity .6
  &-wrap
    display flex
    align-items center
  &:hover
    opacity 1
  &-title
    border-bottom none
    margin 0
    font-size 18px
  &__txt
    flex 1
    font-family -apple-system, BlinkMacSystemFont
  &__excerpt
    letter-spacing .35px
    word-spacing 5px
    height 108px
    // word-break keep-all
    color #555
    p
      margin 0
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; //行数
      -webkit-box-orient: vertical
  &__img
    margin-left 40px
    width 220px
    height 140px
    box-shadow 0 2px 5px rgba(0,0,25,0.1), 0 5px 75px 1px rgba(0,0,50,0.2)
    border-radius 3px
    background #fff
    img
      border-radius 3px
      width 100%
      height 100%

</style>