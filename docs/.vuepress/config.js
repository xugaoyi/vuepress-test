module.exports = {
  base:'/', // 基础路径，默认'/',如果放到github pages可改成仓库名，如：/VuePress-test/
  title: 'hello VuePress', // 左上角标题
  description: 'vuepress测试用例', // 描述，以 <meta> 标签渲染到当前页面的 HTML 中
  head: [ // 注入到当前页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/logo.png' }] //favicons，图片资源放在public文件夹
  ]
}