import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Foxel",
  description: "Foxel 项目的官方文档",
  head: [['link', { rel: 'stylesheet', href: '/custom.css' }]],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '参考', link: '/reference/api-reference' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速上手', link: '/guide/getting-started' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrizzleTime/Foxel' }
    ]
  }
})
