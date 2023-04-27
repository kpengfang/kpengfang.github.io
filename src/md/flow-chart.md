---
tags:
- flow
- flowchart
---

# 标准流程图

> 标准流程图的渲染基于 **flowchart.js**，完整文档请参考[这里](https://github.com/adrai/flowchart.js)

- 示例一：

@flowstart
st=>start: 开始
e=>end: 结束
op1=>operation: 一些操作
op2=>operation: 另一些操作
sub1=>subroutine: 子进程
cond=>condition: 是否？
c2=>condition: 好不好？
io=>inputoutput: 用户输入

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

源码：

```markdown
st=>start: 开始
e=>end: 结束
op1=>operation: 一些操作
op2=>operation: 另一些操作
sub1=>subroutine: 子进程
cond=>condition: 是否？
c2=>condition: 好不好？
io=>inputoutput: 用户输入

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

- 示例2：

@flowstart
st=>start: 开始:>http://www.google.com[blank]
e=>end: 结束:>http://www.google.com
op1=>operation: 一些操作
sub1=>subroutine: 子进程
cond=>condition: 线性 or 多项？ :>http://www.google.com
io=>inputoutput: 捕获用户输入
para=>parallel: 3种可能

st->op1->cond
cond(true@线性)->io->e
cond(false@多项)->sub1(right)
sub1(right)->para
para(path1@可能1, top)->cond
para(path2@可能2, right)->op1
para(path3@可能3, bottom)->e
@flowend

源码：

```markdown
st=>start: 开始:>http://www.google.com[blank]
e=>end: 结束:>http://www.google.com
op1=>operation: 一些操作
sub1=>subroutine: 子进程
cond=>condition: 线性 or 多项？ :>http://www.google.com
io=>inputoutput: 捕获用户输入
para=>parallel: 3种可能

st->op1->cond
cond(true@线性)->io->e
cond(false@多项)->sub1(right)
sub1(right)->para
para(path1@可能1, top)->cond
para(path2@可能2, right)->op1
para(path3@可能3, bottom)->e
```
