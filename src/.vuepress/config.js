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
  title: '学习记录',
  description: '',
  themeConfig: {
    logo: '/icon.png',
    nav,
    sidebar,
    sidebarDepth: 0
  }
}
