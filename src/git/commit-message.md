---
tags:
- git
- 提交
- 规范
---
# Git 提交信息规范

## 1、格式
```scheme
<type>[(<scope>)]: <subject>
```
### `<type>` 表示修改类型，必填，取值：  
- **build**: 影响构建系统或者外部依赖的更改 (例如的scope有: gulp, broccoli, npm)  
- **ci**: CI配置文件和脚本的更改 (例如的scope有: Circle, BrowserStack, SauceLabs)  
- **docs**: 仅文档更改  
- **feat**: 新功能  
- **fix**:  修复bug  
- **perf**: 改进性能的更改  
- **refactor**:  重构，既不修正错误也不增加功能的代码更改  
- **style**: 不影响代码含义的更改（空白，格式，缺少分号等），比如eslint格式的修改  
- **test**: 添加缺失的测试用例或更正现有的测试用例  
- **revert**: 回退到之前的更改  

### `<scope>` 表示修改范围，可选，取值举例：  
- foo  
- bar.css  
- baz.js  
- 登录页  

## 2、举例
```shell
feat(登录页): 做了优化、修改
# 或者
feat: 做了优化、修改
```
