module.exports = {
  title: '基础模板',
  description: '基础项目模板介绍',
  markdown: {
    lineNumbers: false,
  },
  // 继承默认主题
  plugins: [
    'vuepress-plugin-smooth-scroll',
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
            path: '/posts/',
            layout: 'DirectoryPagination',
            itemLayout: 'Detail',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
      },
    ],
  ],
  themeConfig: {
    logo: 'http://www.wuazhu.cn/images/202016_JzjvKR.png',
  },
  evergreen: true,
  devServer: {
    proxy: {
      '/HPImageArchive': {
        target: 'http://www.bing.com',
        changeOrigin: true,
      },
    },
  },
}
