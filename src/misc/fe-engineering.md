---
tags:
- 工程化
- 架构
---

# 「前端工程化」该怎么理解



## 一.什么是前端工程？

一个类似的术语是软件工程（[Software Engineering](https://link.segmentfault.com/?enc=r4ILSDh%2FXJaLuq8tu6j1Qw%3D%3D.t7JCtGKA%2FnUJgVkVoJ1mZ31FWV2cAD7NdCoR%2BYzMXl7fpO1G61UCL2z7V0wBOn6g%2BX0hqOVQdm8drJPl9a1LKw%3D%3D)）：

> Software engineering is the systematic application of engineering approaches to the development of software.

**将工程方法系统化地应用到软件开发中，就叫软件工程**。那么，紧接着又有两个问题：

- 工程方法是什么？
- 系统化怎么理解？

[工程](https://link.segmentfault.com/?enc=vBRtwE9KhRRtv1qCfuhh8g%3D%3D.UAS%2B2jIt7LKFbtLqRvzGqdx9xynj8rHBSAU8lKqdyDvFPY3qOHkT%2FKu9hZ7ej7Lj)是指使用科学原理设计和制造机器、结构等，比如修桥、铺路、建隧道、造车、盖房子：

> Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.

具体到软件领域，指的是**以系统、严谨、可量化的方法开发、运营、维护软件**，软件工程包括对这些方法的应用和研究：

> Software engineering the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software and the study of these approaches.

所谓系统化，可以理解为软件生命周期中用到的这些工程方法是互补的，各自解决一部分问题，联合起来保障软件的质量、交付速度等

综上所述，**前端工程**可以定义为，**将工程方法系统化地应用到前端开发中，以系统、严谨、可量化的方法开发、运营、维护前端应用程序**

## 二.前端工程的演进历程

同样先看软件工程，其发展历程经历了这些关键点：

- 将计算机硬件抽象成[冯·诺依曼架构](https://link.segmentfault.com/?enc=t5ftvt%2F52DnG3jMDhbkolQ%3D%3D.dlQP92WwNudI%2FG8qi7nNyDRtNfWGQM16pW64%2BLRmClpsPDy7tFLuShVWBx4FjqIB4BncO5gEtaAlEYfIRP91azojr6pIQRBWuVC3f%2FQCzHdXOXSpOLkeWmQkPPSvNGjpzj9WYQ3fYZLnsjQ6lCGXjREtxKqXPAqS%2FGVVK3SPpGM%3D)，进而有了软、硬件之分
- 随着软件复杂度的上升，模块化和信息隐藏的理念被提出来
- 为了理解和管理软件开发过程，软件工程变成了一个专业领域
- 为了评估软件开发团队的能力，成熟度衡量标准（CMMI-DEV）形成
- 基于现代软件工程最佳实践，建立起了人们普遍接受的软件工程知识体系

**前端工程也经历了类似的过程**：

- B/S 架构兴起，进而有了前端、后端之分
- 随着前端复杂度的上升，模块复用、[实践规范](https://link.segmentfault.com/?enc=nzWXLbctlukH0PVB0N5kJQ%3D%3D.Z35XYQ1uwYh8PxrxrRbgrifaqyxnct4mhObv5ktcMK%2Fmr8shS64IKD0DPOxTtMWCysObGyePDyxrcVBgKlr%2FVex%2FKWLK8012cEVyfla0n7KSMBSJ4OzESa2tNn8KB3g862T96InJ%2B1JcRkmpQt3hcA%3D%3D)越来越重要
- 为了管理和简化前端开发过程，前端框架、[自动化](https://link.segmentfault.com/?enc=QrA68ZXJFboHUTAHLtdbCA%3D%3D.FlbiQ4WcVWkknIOIjFfJehvP7u8kdmN%2BoIs1t0O9woJ8NuYVw6sRtlFSjlh0A753RUgvPkhqA1qJSTabhYS0vQ%3D%3D)、[构建系统](https://link.segmentfault.com/?enc=cDqW2eLRRiX3X8bn6aenAw%3D%3D.PVSYt0FPJoJzyWZLYOf37k8IyYy86XSKpjfceOyvAIfZQrU3CQUgzqrioWRVtvOKlH1A934m7BaL4tHz1q9eHg%3D%3D)应运而生并发展迅猛
- 基于行业最佳实践，开箱即用的框架（如[dva](https://link.segmentfault.com/?enc=fKrmgSyo0WQYSssqXLqF3Q%3D%3D.kEY2IkiZyJWNtbMNtRBul%2BxQkupNBm4OO20DCNS80Fk%3D)）、[工具体系](https://link.segmentfault.com/?enc=4ehtj0Rp1TqoaBeLU0tu1g%3D%3D.9Y2qoythhVJNkkaAT0N6Db9S%2FIijDAmexuazKedqPt0%3D)等逐渐建立起来

前端越来越重，复杂度越来越高，配套的前端工程体系也在不断发展和完善，可简单分为开发、构建、发布 3 条主线：

- 前端框架：插件化（jQuery） -> 模块化（RequireJS） -> 组件化（React）
- 构建工具：任务化（grunt/gulp） -> 系统化（webpack）
- CI/CD：工具化（Jenkins） -> 自动化（Web Hook）

**三大主线撑起了前端工程体系，系统地覆盖了前端开发的主流程，其中的工程方法也彼此互补、相互影响**，体现在：

- 构建工具让百花齐放前端框架、类库能够无缝合作
- 前端框架、类库也在一定程度上影响着构建工具（如模块加载、CSS 预处理）、甚至 CI/CD（如 SSR）

## 三.面向过程视角下的前端工程体系

![image](/fe-engineering/fe-engineering.jpeg)

（摘自[Book of Modern Front-end Tooling](https://link.segmentfault.com/?enc=Fxdmq6C8fr7WV5Mrtq6trw%3D%3D.hZhYbN8QGkEe0KrYoYi3t7rt5vZaGAqCrsEodNNLbekGQEUA5a%2FGlJGr1Beb4nP%2BEeIiM2COUt4mPFuK7olWfg%3D%3D)）

典型的前端工作流分为 5 个步骤：

1. 开发
2. 测试
3. 构建
4. 部署
5. 监控

**从脚手架到监控系统，配套的前端工程体系已经融入到了前端工作流的每个环节，很大程度上决定着前端生产效率**

P.S.开发环节之前的分析、设计阶段这里不展开，因为传统的软件工程方法同样适用，前端项目在这个阶段并没有太大的特殊性

### 开发阶段

开发阶段的首要任务是创建样板项目（一并选择前端框架、类库），接着开始修改-验证的主循环，主要涉及这些工程化设施：

- 脚手架：创建前端应用的目录结构，并生成样板代码
- 公共库：维护着可复用的 UI 组件、工具模块等公共资源
- 包管理器：引入第三方库/组件，并跟踪管理这些依赖项
- 编辑器：提供语法高亮、智能提示、引用跳转等功能，提升开发体验
- 构建工具：提供语法校验、编译、打包、DevServer 等功能，简化工作流
- 调试套件：提供预览、DevTools、Mock、性能分析诊断等调试功能，加速修改-验证的主循环

### 测试阶段

开发完成，进入测试阶段，先要对整体功能进行充分自测，再移交专业的测试人员验证，过程中需要用到工程化设施有：

- 单元测试框架：提供针对组件、逻辑的测试支持
- 静态扫描工具：从代码质量、构建产物质量、最佳实践/开发规约等多个维度做静态检查
- 自动化测试工具：针对 UI 效果和业务流程，提供测试支持
- 性能测试工具：监测并统计出相对准确的性能数据

### 构建阶段

不同于开发阶段，在构建阶段要做更多的极限优化和流程联动，涉及：

- 打包脚本：在语法校验、编译、打包的基础上，进行合并、压缩、[代码拆分](https://link.segmentfault.com/?enc=%2BrrC1hWfttreZJxMYwCugw%3D%3D.Z2MODj6z%2BijiaZRajp6WU%2BQlfsX8cq2qn6lbGYLiz%2BKt7y%2BDD3D64amDlAKVk5ZEHaHoo8PSIehf5HA0VwERjA%3D%3D)、图片处理、[SSR](https://link.segmentfault.com/?enc=AFFACi8klAiXrxydyfGnAw%3D%3D.PdoOvsxBPArw%2FxDSsrbgpCB4wUJrfEmbUrzlZW3NIpXnSXewm7ZbfYg2PhQhKphISNgfWHNeWon5B0qn8XcqO1%2FIxTaw3fhrg502c%2BbsSLqKRf9c1m%2BmaCanZFgeWAwz)等极限优化
- 构建服务：支持多任务并行打包、通知

### 部署阶段

最后将经过充分测试的前端应用程序部署到生产环境，需要这些工程化工具：

- 发布平台：将前端资源上传至 CDN 或 SSR 渲染服务，或者以离线包的形式集成到移动客户端
- 迭代管理平台：提供 CI/CD 支持

### 监控阶段

前端应用程序上线之后，还需要持续关注线上的实际效果和异常情况，依赖这些工程设施：

- 埋点平台：统计、分析业务数据，跟踪性能指标
- 监控平台：观察线上的异常信息，包括报错、白屏、流量异常等

## 四.过程之间的衔接

除工作流各阶段的工程设施之外，前端工程的另一部分是**过程之间的衔接**。前者旨在提高生产效率，后者要解决的是体验问题

总的来看，前端工程的演进体现在 2 方面：

- 协作模式：多表现为新的理念、新的架构，如[BFF/SFF](https://link.segmentfault.com/?enc=4%2BQRS55Gyc31iWRhUMW4Pg%3D%3D.QKxcvD3FyMVW8LPbZXo99uEjcDCxlTfVBJeSoZKDtQ4CBCrIcba6nxJgP9041D9YdL1U%2BwRAy5Cu5vysInQMgA%3D%3D)
- 开发模式：体现在新的抽象层、新的工作流上，如[Sass](https://link.segmentfault.com/?enc=b0hlif%2FV95opc6Nw08cy3A%3D%3D.invQAhPFEIR20FyigmKGKaBVmC8lPKKf%2F6POfr39PKy2u9ZJUlcEB7P%2FCRyw3%2FRcQo84LXpCQHG%2BjWux9tQNy5s2lfmRiJbjDW1VuEUuLnw%3D)、[React](https://link.segmentfault.com/?enc=iNp0PEFAp6yyzoJwgUzxnQ%3D%3D.oKtfwYu4%2Bo0OXFijqnXE1jKkeoHj7qDJw9lipbSdg0qlfMLkoIeI%2FdBJTPeyYGVu)、[webpack](https://link.segmentfault.com/?enc=VPIPWH89tFjD2xQa2M1LTg%3D%3D.bSmccmXuL%2BfVV6SjWAC%2FevfbRABBMFcNtecvuSYZKPeZvLqZN7mU1%2BtBK8MtBu61)、甚至[Cloud IDE](https://link.segmentfault.com/?enc=6mQF4QDJP2SKSVxCyf2jFg%3D%3D.RHjqeFT9Sz4aFpDeQSYz6XrAY0FvUBo4fj7sqOxtID3gRDm3xFNo4zcHglfbIWKa)

无论是职责分工的变化还是具体工作内容的变化，**对开发者而言，都意味着更多的学习、理解成本，并最终表现在开发体验上**。而面向过程间衔接的工程设施正是为了缓解这些变化带来的升级适配成本，更平滑地走出过渡期

例如：

- [codemod](https://link.segmentfault.com/?enc=uH4wbnYx07%2BTAon7ggx%2FhQ%3D%3D.37DtfO1IwtN6I%2BdXK0ta8vySpIUtoTXhU5s%2BxGpcGIExIrvU5UNEt386o2gPb3Nm)：衔接新旧前端框架，降低升级适配成本
- [dva](https://link.segmentfault.com/?enc=PPTDGvRAivALQtLLIj6QnA%3D%3D.M7SIrBim7%2FcGFv7AvEA9N3HjmwgVfo6UZLGvfad7gjI%3D)：衔接 React 生态中的各种优秀理念（redux、redux-saga 等），降低学习成本
- [IDE](https://link.segmentfault.com/?enc=epXEhY3BcExClMlu9f0bnQ%3D%3D.%2B%2BNKdrYA3uKRZK1rx3I1NcKzIWkQIkn6HfucbkcDxdvwfc6g2GDkRCaPPlt163R1hQILvgYES9J8w5Tj1DGeLh18DhL1AC%2BHZBouCZlEVkw9Kj%2Fq56Eig8OldRvLhdQCTOiAT7VxK60lUzQZG6pbfg%3D%3D)：一方面打包全套工程设施，降低上手成本，另一方面衔接工作流的各个阶段，提升开发体验

理想的，前端工程不仅要持续优化协作模式、提升开发效率，还应该保障**开箱即用的上手体验、一气呵成的衔接体验、无缝切换的升级体验**

## 五.总结

**从面向过程的角度来看，前端工程是贯穿前端应用生命周期的一系列工程设施**，用来保障前端应用的开发体验、质量和交付速度

具体的，前端工程围绕开发、构建、发布 3 条主线展开，以工具化、自动化等手段解决各个环节所遇到的问题。一方面控制前端开发的复杂度，提高前端生产效率，另一方面降低架构升级、协作模式变化等带来的迁移、适配成本，提升开发体验

### 参考资料

- [大公司里怎样开发和部署前端代码？](https://link.segmentfault.com/?enc=iQ7RxRHfIkrJVE%2FTEp5JmQ%3D%3D.fi6a2TpKUH8nC4fukmktkynuUdCLRhyZTDq0iSrYnFb%2BFRjYKgcR0jniV%2FHo1%2F7EemYKH40tBqZmrNMSWqbXIA%3D%3D)
- [如何推动前端团队的基础设施建设](https://segmentfault.com/a/1190000022087724)

### 有所得、有所惑，真好

关注「前端向后」微信公众号，你将收获一系列「用**心**原创」的高质量技术文章，主题包括但不限于前端、Node.js以及服务端技术

本文首发于 [ayqy.net](https://link.segmentfault.com/?enc=fCuDwp2OCr3xVFa0IcPgpA%3D%3D.CmEwX8BC3IRc2P1iljk%2Fd39gzvZ95wZF0XuHR5Xvuu4%3D) ，原文链接：[http://www.ayqy.net/blog/proc...](https://link.segmentfault.com/?enc=LbUbSR%2ByRsvQDDaltsjjLw%3D%3D.2eQ20wT5P8RFekf5tE8xDrMPMnIO0zd8EWDBy1DKVfMHd8Sf6vtyg6UAnK3rvBk3miq66iEgtAuxoscgRV7Jng%3D%3D)
