# CSS隐藏滚动条

示例：隐藏水平滚动条，同时允许垂直滚动，但隐藏滚动条

html：
```html
<div class="box"></div>
```

css：
```css
.box::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.box {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
```
