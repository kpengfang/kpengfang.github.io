const { base } = require('./base');
const nav = require('./nav-bar')
const sidebar = require('./side-bar')
module.exports = {
  host: 'localhost',
  port: 7910,
  dest: './docs',
  base,
  plugins: [
    'mermaidjs',
    'flowchart'
  ],
  markdown: {
    lineNumbers: true,
    plugins: [
      'katex'
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/katex-css/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "/katex-css/github-markdown.min.css" }]
  ],
  title: '满分笔记',
  description: '记录工作和学习中有用的信息',
  themeConfig: {
    logo: '/icon-100.png',
    nav,
    sidebar,
    sidebarDepth: 0
  }
}
