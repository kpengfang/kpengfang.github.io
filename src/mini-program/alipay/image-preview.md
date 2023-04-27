---
tags:
- 支付宝图片预览
- 支付宝自定义组件
---

# 支付宝小程序图片预览问题

小程序图片预览的实现有两个步骤：
1. 绑定`tap`事件响应函数；
2. 在事件响应函数中调用`my.previewImage()`API，并传入适当参数。

## tap 事件绑定

原生的 `<image>` 对 tap 事件的支持是理想的，如：

```xml
<image src="xxxx" catchTap="viewImgs"></image>
```
一旦你有把图片封装为自定义组件的需求时，就要小心了，上述的 `catchTap`（或 `onTap`） 
很可能不会按你的预期工作。假设你封装了一个自定义组件 `my-image`：
```xml
<!-- tap 事件的绑定不会工作 -->
<my-image src="xxxx" catchTap="viewImgs"></my-image>
```
**解决方案**：在你的组件外层再包装一层父盒子，在父盒子上绑定`tap`事件
```xml
<view catchTap="viewImgs">
  <my-image src="xxxx"></my-image>
</view>
```

## 预览 API

图片预览的 API 是这样的，
```javascript
// 支付宝
my.previewImage({
  current: 0, // 当前预览的图片的索引，基于 0
  urls: [], // 预览的图片 url 的集合
});

// 微信、百度等小程序
x.previewImage({
  current: '', // 当前预览的图片的 url
  urls: [], // 预览的图片 url 的集合
});
```
看出差异了吗，老铁？支付宝的`current`参数竟然是**索引**，而不是**URL**，小坑一枚！
