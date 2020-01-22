<template>
  <div :class='prefix'>
    <!-- <Navbar /> -->
    <div class="back" @click="$router.go(-1)">
      <i class="iconfont icon-back"></i>
      <span>返回</span>
    </div>
    <div :id="$page.path" class="leancloud_visitors">
      <span>阅读量</span>
      <span class="leancloud-visitors-count"></span>
    </div>
    <h1 class="detail__header">{{$page.frontmatter.title}}</h1>
    <p class="detail__times">
      <span>{{$page.lastUpdated}} 发布</span>
    </p>
    <Content />
    <!-- <Vssue title="Vssue" /> -->
    <!-- <Comment></Comment> -->
    <div id="comments"></div>
  </div>
</template>

<script>
const PREFIX = "theme-container__right detail"

export default {
  name: "Detail",
  components: {
  },
  data() {
    return {
      prefix: PREFIX
    };
  },
  mounted() {
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
     
    new Valine({
      el: '#comments' ,
      appId: 'L7Y8kAo11Tl1keVsl4eCcsK2-gzGzoHsz',// your appId
      appKey: 'h51NPbj8oUmMujNU0tc10d5S', // your appKey
      notify:false, 
      verify:false, 
      avatar:'wavatar',
      visitor: true,
      path: window.location.pathname,
      placeholder: 'type here ~',
      pageSize: 3
    });
  },
}
</script>