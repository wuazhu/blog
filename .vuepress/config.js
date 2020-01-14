module.exports = {
  title: "'welcome vicson's blog'",
  description: '吴阿铸的个人博客',
  markdown: {
    lineNumbers: false,
  },
  head: [
    [
      'link', {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_1610672_oeibx3kqjbp.css',
      }
    ]
  ],
  // 继承默认主题
  plugins: [
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'L7Y8kAo11Tl1keVsl4eCcsK2-gzGzoHsz',
          appKey: 'h51NPbj8oUmMujNU0tc10d5S'
        }
      }
    ],
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //   {
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github',
    //     // 其他的 Vssue 配置
    //     owner: 'wuazhu',
    //     repo: 'blog',
    //     clientId: 'e83e2ebed56f77859a65',
    //     clientSecret: '5c9856c07ddb6bf9a0b0a96ea22f3013165cefff',
    //     locale: 'zh'
    //   }
    // ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'posts',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            itemLayout: 'Detail',
            layout: 'DirectoryPagination',
            itemPermalink: '/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 8,
            },
          },
        ],
      },
      {
        sitemap: {
          hostname: 'http://www.wuahzu.cn'
        },
      },
      {
        comment: [
          {
            // Which service you'd like to use
            service: 'vssue',
            // The owner's name of repository to store the issues and comments.
            owner: 'wuazhu',
            // The name of repository to store the issues and comments.
            repo: 'blog',
            // The clientId & clientSecret introduced in OAuth2 spec.
            clientId: 'e83e2ebed56f77859a65',
            clientSecret: '5c9856c07ddb6bf9a0b0a96ea22f3013165cefff',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    // logo: 'http://www.wuazhu.cn/images/202016_JzjvKR.png',
  },
  evergreen: true,
}
