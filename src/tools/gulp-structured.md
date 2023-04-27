---
tags:
- gulp拆分
- gulp模块化
---

# Gulp结构化最佳实践

> 本文引自：[https://segmentfault.com/a/1190000040609449](https://segmentfault.com/a/1190000040609449)

在 Gulp 的官方文档中，Gulp 的任务都是写在 gulpfile.js 这一个文件中的，如果任务数量不多，这并不会有什么问题，但当任务数量较多时，会造成代码可读性差，难以维护，多人协作时还会容易造成冲突。因此，更好的处理方式是把 Gulp 的代码结构化。

## 开始结构化

[https://github.com/QMUI/qmui_web](https://link.segmentfault.com/?enc=B07bYevkD1OpSPYYB2IxTQ%3D%3D.0nJ0bnqCA%2F99ixx%2BtIyT%2FZkGOtHpnFyzUZlIIcx6Y%2BvBf41iq5D5w0zCBU9SQY4t)

这是一个前端框架，主要由一个 SASS 方法合集与内置的工作流构成，其中工作流部分提供了一系列的任务用于处理前端流程，并且由于是可配置的框架，需要读取配置文件，因此虽然原有的 gulpfile.js 的代码并不庞大，但仍然需要进行结构化处理，本文将会详细说明如何进行结构化处理。

主要的思路是把 gulpfile.js 中的任务分散到独立的文件中编写，然后在 gulpfile.js 中引入这些 task。因此最简便的方法是把每个 task 单独写在独立的文件中，以 task 名命名文件名，在 gulpfile.js 中把这些文件读取进去，例如：

### workflow/task/clean.js

```javascript
var del = require('del');

gulp.task('clean', '清理多余文件（清理内容在 config.json 中配置）', function() {
    // force: true 即允许 del 控制本目录以外的文件
    del(common.config.cleanFileType, {force: true});
    console.log(common.plugins.util.colors.green('QMUI Clean: ') + '清理所有的 ' + common.config.cleanFileType + ' 文件');
});
```

### gulpfile.js

```javascript
var gulp        = require('gulp'),
    requireDir  = require('require-dir');

// 遍历目录，加载 task 代码
requireDir('./workflow/task', { recurse: true });

gulp.task('default', ['clean']);
```

这种方法操作起来比较简单，同时基本不需要改动原有的代码，只需对 gulpfile.js 稍作改动即可。但同时也引入了一些问题，例如，文章开头说过的，像 QMUI 这类需要读取公共配置文件的需求，这里就无法解决，各个任务中如果需要引入配置表，都需要单独引入，同时像工具方法这类内容也会重复引入，造成浪费。因此实际上，[clean.js](https://link.segmentfault.com/?enc=Ij5KEk2j3OzAxg0Fa1F5Lw%3D%3D.pDmfb0q4EyBe%2FHJoQ8yHFsjg5%2FpNdamIuvsib2mCRFT%2BI2kmvMqPHvMWXoq%2FwkRqn0Wx%2FxAljuOLBO1QSIJIAeWi1SBCasDodWNLoogWea4%3D) 中也不是像上面的例子那样编写的，而是采用 module 的方式拆分任务。

## Module 形式的结构化

为了避免在子任务文件中重复引入全局的配置、插件依赖和工具方法，更好的方式就是把全局配置、工具方法以及子任务都拆分成模块，并利用 require 的方式引入模块。

首先，可以先看一下结构化后的目录结构：

```mipsasm
.
├── gulpfile.js
├── package.json
└── workflow
    ├── common.js
    ├── lib.js
    └── task
        ├── clean.js
        ├── compass.js
        ├── include.js
        ├── initProject.js
        ├── merge.js
        ├── readToolMethod.js
        ├── start.js
        ├── version.js
        └── watch.js
```

接下来以其中几个文件为示例：

### common.js

```javascript
// 声明插件以及配置文件的依赖
var plugins     = require('gulp-load-plugins')({
                    rename: {
                      'gulp-file-include': 'include',
                      'gulp-merge-link': 'merge'
                    }
                  }),
    packageInfo = require('../package.json'),
    lib         = require('./lib.js'),
    config      = require('./config.js');;

// 创建 common 对象
var common = {};

common.plugins = plugins;
common.config = config;
common.packageInfo = packageInfo;
common.lib = lib;

module.exports = common;
```

### clean.js

```javascript
var del = require('del');

module.exports = function(gulp, common) {
  gulp.task('clean', '清理多余文件（清理内容在 config.json 中配置）', function() {
    // force: true 即允许 del 控制本目录以外的文件
    del(common.config.cleanFileType, {force: true});
    common.plugins.util.log(common.plugins.util.colors.green('QMUI Clean: ') + '清理所有的 ' + common.config.cleanFileType + ' 文件');
  });
};
```

### gulpfile.js

```javascript
/**
 * gulpfile.js QMUI Web Gulp 工作流
 */
 var gulp = require('gulp-help')(require('gulp'), {
             description: '展示这个帮助菜单',
             hideDepsMessage: true
           }),
    fs = require('fs'),
    common = require('./workflow/common.js');

// 载入任务
var taskPath = 'workflow/task';

fs.readdirSync(taskPath).filter(function (file) {
  return file.match(/js$/); // 排除非 JS 文件，如 Vim 临时文件
}).forEach(function (_file) {
  require('./' + taskPath + '/' + _file)(gulp, common);
});
```

总结如下：

- 公共的配置、插件依赖和工具方法使用一个 common 对象关联起来，并且封装成模块
- 每个子任务封装成模块，并且可以传入 gulp 和 common 两个参数，这样公共的部分可以复用
- gulpfile.js 中遍历任务目录，对所有子任务都执行 require，所有子任务都在 gulpfile.js 中成功注册

至此，一个完整的结构化 Gulp 就处理好了，Gulp 的目录结构变得清晰很多，这时候无论是增加工具方法，增删子任务，尤其是多人协作时都会方便很多了。

## 注意事项

除了以上的主要思路，在实践中一些事项需要注意：

- 子任务是被 gulpfile.js require 进去的，因此 `gulp.src` 和 `gulp.dest` 的相对目录关系并不需要修改，依然是以 `gulpfile.js` 所在目录为基准。但子任务文件中 require 文件是以子任务文件所在目录为基准的，如上面的代码中 common.js 在引入 package.json 是需要在上层目录中进行操作 —— `packageInfo = require('../package.json')`。
- require 当前目录的模块不能省略 `./`，否则无效。
- 需要有项目中依赖了多个 gulp 的插件，推荐使用 [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) 插件管理多个插件。
