<template>
  <div class="theme-container">
    <aside class="theme-container__left">
      <div class="widget-container">  
        <div class="theme-container__desc">
          <img src="https://imgs.wuazhu.cn/imgs/psb.jpeg!square" class="avatar" />
          <hgroup>
            <h1>吴阿铸的博客</h1>
            <h2>Wuazhu's Blog</h2>
          </hgroup>
        </div>
        <section class="theme-container__social">
          <ul>
            <li>
              <router-link to="/" class="text-white">
                <i class="iconfont icon-home"></i>
              </router-link>
            </li>
            <li>
              <Popper
                trigger="hover"
                :options="{
                  placement: 'bottom',
                  modifiers: { offset: { offset: '0,10px' } }
                }">
                <div class="popper">
                  <img src="https://imgs.wuazhu.cn/imgs/20200115_efNpra.jpeg" alt="二维码" style="width:100px;height:100px">
                </div>

                <i slot="reference" class="iconfont icon-wechat1"></i>
              </Popper>
            </li>
            <li>
              <a href="https://github.com/wuazhu" target="_blank" class="text-white">
                <i class="iconfont icon-GitHub"></i>
              </a>
            </li>
            <li>
              <a href="mailto:317516763@qq.com" class="text-white">
                <i class="iconfont icon-email"></i>
              </a>
            </li>
          </ul>
        </section>
        <section class="words">
          <section class="grid1">“</section>
          <section class="grid2">{{hitokoto}}</section>
          <section class="grid3">--{{creator}}</section>
          <section class="grid4">”</section>
        </section>
        <footer class="footer">
          <p class="desc__location"><i class="iconfont icon-location"></i> Beijing, China</p>
          <div class="info">
            <p></p>
            <p>感谢又拍云提供CDN服务</p>
          </div>
          <div class="self">
            <p>wuazhu.cn. All Rights Reserved.</p>
            <p class="copyright">©京 ICP 备 19059488 号 </p>
          </div>
        </footer>
      </div>
    </aside>
    <!-- <div class="play-fixed" style="position:fixed;">
      <keep-alive>
        <aplayer
          mini
          theme
          :autoplay="autoplay"
          preload="https://m10.music.126.net/20200117143232/3f8e013ae40f79f4971cbbb6ffc144e6/ymusic/0709/530b/065c/0c41c28323daf30425eb168d9cdee7a3.mp3"
          @canplay="canplay"
          :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://m10.music.126.net/20200117143232/3f8e013ae40f79f4971cbbb6ffc144e6/ymusic/0709/530b/065c/0c41c28323daf30425eb168d9cdee7a3.mp3',
            pic: ''
          }"
        />
      </keep-alive>
    </div> -->
    <component :is="layout"/>
  </div>
</template>

<script>
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'
import ArticleCard from '../components/ArticleCard'
import Aplayer from 'vue-aplayer'
import axios from "axios";
export default {
  components: {
    ArticleCard,
    Popper,
    Aplayer
  },
  data() {
    return {
      autoplay: false,
      socialMedia: [
        {
          name: 'home',
          icon: 'icon-wechat',
          path: '/'
        },
        {
          name: 'github2',
          icon: 'icon-GitHub',
          path: '/'
        },
        {
          name: 'wechat',
          icon: 'icon-wechat',
          path: '/'
        },
        {
          name: 'github',
          icon: 'icon-GitHub',
          path: '/'
        },
      ],
      hitokoto: '',
      creator: '',
    };
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return 'DirectoryPagination';
      }
      return "NotFound";
    }
  },
  methods: {
    canplay() {
      console.log('可以播放了')

    this.autoplay = true
    },
    async getHitokoto() {
      const hitokoto = await axios.get('https://v1.hitokoto.cn')
      this.hitokoto = hitokoto.data.hitokoto
      this.creator = hitokoto.data.from
    }
  },
  mounted() {
    console.log('mounted')
    this.autoplay = true
    this.getHitokoto()
    axios.get('https://api.ooopn.com/image/bing/api.php?v=2&type=json')
    .then(res => {
      console.log(res)
    })
  }
};
</script>
