const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const {themeConfig, siteConfig} = ctx

  // resolve algolia
  const isAlgoliaSearch =
    themeConfig.algolia ||
    Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
      base => themeConfig.locales[base].algolia
    )

  // const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js'),
      }
    },
    themeConfig: {
      lastUpdated: true
    },
    globalLayout: '@theme/layouts/GlobalLayout.vue',
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale('zh-CN')
            return moment(timestamp).fromNow()
          }
        }
      ],
      // ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      [
        'container',
        {
          type: 'tip',
          defaultTitle: {
            '/': 'TIP',
            '/zh/': '提示',
          },
        },
      ],
      [
        'container',
        {
          type: 'warning',
          defaultTitle: {
            '/': 'WARNING',
            '/zh/': '注意',
          },
        },
      ],
      [
        'container',
        {
          type: 'danger',
          defaultTitle: {
            '/': 'WARNING',
            '/zh/': '警告',
          },
        },
      ],
      'smooth-scroll',
    ],
    extend: '@vuepress/theme-default',
  }
}
