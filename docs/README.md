---
home: true
heroImage: /assets/img/logo.jpg
heroText: Hello world 主标题
tagline: 我是副标题
actionText: 快速上手 → # 激活按钮文本
actionLink: '/foo/1' # 激活按钮链接
features: # 产品特点介绍
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You # 底部文本
---









## 首页

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](https://vuepress.vuejs.org/zh/))。想要使用它，需要在你的根级 `README.md` 的 [YAML front matter](https://vuepress.vuejs.org/zh/guide/markdown.html#front-matter) 指定 `home: true`。以下是一个如何使用的例子：

```yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: '/#首页'
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。

# hello world



### 链接跳转

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

[foo](./foo/)

[foo-1](/foo/1.md)





`<script>`和`<style>`标签及代码会被提取到页面


<script>
console.log(123)
</script>

# 在 Markdown 中 使用 Vue

### 插值

```md
{{ 1 + 1 }} 会被解析成 2
```

{{ 1 + 1 }}

### 指令

```md
<span v-for="i in 3">{{ i }} </span> 会解析成 1 2 3
```

<span v-for="i in 3">{{ i }} </span>



### 访问网站以及页面的数据

```md
{{ $page }}
```

{{ $page }}



### 大括号转义

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

::: v-pre
`{{ This will be displayed as-is }}`
:::



### 自动生成外部链接图标

[Github](https://github.com/xugaoyi)