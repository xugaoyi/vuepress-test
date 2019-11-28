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