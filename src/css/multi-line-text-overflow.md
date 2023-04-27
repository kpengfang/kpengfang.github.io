---
tags:
- text-overflow
- 文本溢出
- 省略号
---
# 多行文本末尾添加...

例如：想要设置盒子内容最多不超过 3 行，否则末尾添加...
```html
<article class="article">好多好多文字在这里</article>
```
CSS样式如下：
```css
.article {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
```
**踩坑记：**
> 多行文本省略不生效的问题
> 遇到了多行文本省略样式不生效的问题，排查后发现我在页面里面一直看不到 `-webkit-box-orient: vertical;` 这个样式，但是代码里面是有写的。
> 于是怀疑是不是编译的时候被删掉了，果然，在把 postcss-loader 注释后这个属性就出来了。最终原因是：autoprefixer 会把带 `-webkit-` 前缀的有些样式删掉以便由自己来生成，但是这货对 `box-orient` 这个属性却只删不处理。  
> 解决方案：
> 1. 在该条属性上面加上忽略注释：`/* autoprefixer: ignore next */`
> 2. 在 .browserslistrc 文件里面加上 `defauts Safari 6`
