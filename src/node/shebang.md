---
tags:
- node注释
---
# Shebang

## `#!/usr/bin node` 和`#!/usr/bin/env node`两者的区别
是Unix和Linux脚本语言的第一行，目的就是指出，你想要你的这个文件中的代码用什么可执行程序去运行它。

`#!/usr/bin/node`是告诉操作系统执行这个脚本的时候，调用`/usr/bin`下的node解释器；
`#!/usr/bin/env node`这种用法是为了防止操作系统用户没有将node装在默认的/usr/bin路径里。当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
`#!/usr/bin/node`相当于写死了node路径;
`#!/usr/bin/env node`会去环境设置寻找node目录,推荐这种写法。

## Shebang是什么？

若是有使用过Linux或者Unix的前端开发者，对于Shebang应该不陌生，它是一个符号的名称，`#！`。这个符号通常在Unix系统的基本中第一行开头中出现，用于指明这个脚本文件的解释程序。了解了Shebang之后就可以理解，增加这一行是为了指定用node执行脚本文件。

当你输入一个命令的时候，npm是如何识别并执行对应的文件的呢？具体的原理阮一峰大神已经在[npm scripts 使用指南](https://link.juejin.im/?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F10%2Fnpm_scripts.html)中介绍过。简单的理解，就是输入命令后，会有在一个新建的shell中执行指定的脚本，在执行这个脚本的时候，我们需要来指定这个脚本的解释程序是node。

在一些情况下，即使你增加了这一行，但还是可能会碰到一下错误，这是为什么呢？

```sh
No such file or directory
```

为了解决这个问题，首先需要了解一下`/usr/bin/env`。我们已经知道，Shebang是为了指定脚本的解释程序，可是不同用户或者不同的脚本解释器有可能安装在不同的目录下，系统如何知道要去哪里找你的解释程序呢？ `/usr/bin/env`就是告诉系统可以在PATH目录中查找。 所以配置`#!/usr/bin/env node`, 就是解决了不同的用户node路径不同的问题，可以让系统动态的去查找node来执行你的脚本文件。

看到这里你应该理解，为什么会出现`No such file or directory`的错误？因为你的node安装路径没有添加到系统的PATH中。所以去进行node环境变量配置就可以了。

要是你只是想简单的测试一下，那么你可以通过`which node`命令来找到你本地的node安装路径，将`/usr/bin/env`改为你查找到的node路径即可。

最后需要说明的一点是，windows不支持Shebang,它是通过文件的扩展名来确定使用什么解释器来执行脚本。
