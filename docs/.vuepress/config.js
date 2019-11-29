module.exports = {
  base: '/vuepress-test/', // 基础路径，默认'/',如果放到github pages要改成仓库名，如：/vuepress-test/
  title: 'hello VuePress', // 左上角标题
  description: 'vuepress测试用例', // 描述，以 <meta> 标签渲染到当前页面的 HTML 中
  head: [ // 注入到当前页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/assets/img/logo.jpg' }] //favicons，资源放在public文件夹
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },
  plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'], // 插件
  themeConfig: { // 主题配置
    logo: '/assets/img/logo.jpg', // 导航栏logo
    nav: [ // 导航
      { text: '首页', link: '/' },
      {
        text: '子页',
        items: [ // 导航下拉列表
          { text: '子页1', link: '/foo/1.md' },
          { text: '子页2', link: '/foo/2.md' }
        ]
      },
      {
        text: '子页2',
        items: [ // 下拉列表 内设置分组
          { text: '分组1', items: [{ text: '子页3', link: '/bar/3.md' }, { text: '子页4', link: '/bar/4.md' }] },
          { text: '分组2', items: [{ text: '子页3', link: '/bar/3.md' }, { text: '子页4', link: '/bar/4.md' }] }
        ]
      },
      { text: 'xugaoyi', link: 'https://github.com/xugaoyi' },
    ],
    // sidebar: [ // 侧边栏
    //   '/',
    //   '/foo',
    //   ['/bar', '自定义显式文本']
    // ]
    // displayAllHeaders: true, 显示所有页面的标题链接
    sidebar: { // 侧边栏
      '/foo/': [// 针对不同页面设置不同侧边栏
        '',
        '1',
        '2',
      ],
      '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
        '/',
        {
          title: 'foo', // 标题，必要的
          path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
          collapsable: false, // 是否可折叠，可选的，默认true
          sidebarDepth: 1,    // 深度，可选的, 默认值是 1
          children: [
            ['foo/', '子页1'],
            'foo/1',
            'foo/2',
          ]
        },
        {
          title: 'bar',
          children: [
            ['bar/', '子页2'],
            'bar/3',
            'bar/4',
          ]
        }
      ],
    },
    // search: false,// 禁用搜索框

    // 导航栏生成一个Github链接
    repo: 'xugaoyi/vuepress-test',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为 "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

      // 假如你的文档仓库和项目本身不在一个仓库：
      //docsRepo: 'xugaoyi/vuepress-test',
      // 假如文档不是放在仓库的根目录下：
      //docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      //docsBranch: 'master',
      // 编辑链接，默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '在Github上编辑此页',

    // 最近更新时间
    lastUpdated: '上次更新', // string | boolean
    smoothScroll: true // 页面滚动效果
  }
}