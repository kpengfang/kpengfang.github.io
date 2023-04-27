---
tags:
- 图片打底图
---

# 支付宝小程序打底图问题

为了较好的体验，很多时候你需要给图片添加打底图。
::: tip 提示
这里说的打底图，指的是图片未完成加载前展示的图片，而不是无图时的"兜底图"。
:::

## 放弃的方案：给图片设置背景图

像微信、百度等其他小程序，通常的一个做法是：通过 CSS 给要加载的图片设置背景图即可：

```xml
<image class="img" src="xxx" lazy-load="{{true}}" ></image>
```
```css
.img {
  width: 100rpx;
  height: 100rpx;
  background: url("path/to/default/pic.png") 0 0 / 100rpx 100rpx no-repeat;
}
```
经过实践，发现这么做在支付宝小程序里的效果是不理想的，仍然会出现打底图不显示的情况。

## 父盒子 + 背景图 同样不理想

于是想到了给图片添加父盒子，给父盒子设置背景图：

```xml
<view class="img-box">
  <image src="xxx" lazy-load="{{true}}" ></image>  
</view>
```
```css
.img-box {
  width: 100rpx;
  height: 100rpx;
  background: url("path/to/default/pic.png") 0 0 / 100rpx 100rpx no-repeat;
}
```
这么做，解决了打底图偶尔仍然空白的问题，但遇到一种特殊情况时就比较棘手：当需要展示的正常图片**有透明区域时**，就会在透明区域
暴露出打底图。
难道你要通过图片的`onLoad`事件来隐藏打底图吗？如果要展示的不是单张图片、而是个图片列表呢？你要隐藏哪一张的打底图呢？
你的控制变量该怎么写呢？肯定能实现，但是会相当麻烦！

## 正确打开方式：default-source 属性

支付宝小程序总是那么特立独行，它的`<image>`居然有个`default-source`属性，
没错，就是它！它就是用来设置图片加载过程中展示的"打底图"的：

```xml
<image 
  src="xxx"
  default-source="path/to/default/pic.png" 
  lazy-load="{{true}}"
></image>
```

--本文完--
