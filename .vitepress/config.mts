import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Foxel",
  description: "Foxel 项目的官方文档",
  head: [['link', { rel: 'stylesheet', href: '/custom.css' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '演示', link: 'https://demo.foxel.cc' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速上手', link: '/guide/getting-started' }
        ]
      },
      {
        text: '存储',
        items: [
          { text: '本地存储', link: '/guide/storage/local' },
          { text: 'WebDAV', link: '/guide/storage/webdav' },
          { text: 'OneDrive', link: '/guide/storage/onedrive' },
          { text: 'S3', link: '/guide/storage/s3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrizzleTime/Foxel' }
    ]
  }
})
