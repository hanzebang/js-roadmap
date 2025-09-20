---
title: 📕 前端学习计划
---

<h2 id="oSeOr">系统学习计划</h2>

系统性详细学习可参考[《阿里云-前端开发学习路线》](https://developer.aliyun.com/learning/roadmap/frontend)。



其中推荐学习课程标记：

<font style="background:#DBF1B7;color:#2A4200">推荐</font>- 推荐学习，通常是实践需要的技能

<font style="background:#F6E1AC;color:#664900">可选</font>- 有一定了解即可，可以后期补充学习

<font style="background:#F8CED3;color:#70000D">不推荐</font>- 用处不大或知识过旧，前期不推荐学习



推荐学习大纲：

+ <font style="background:#F6E1AC;color:#664900">可选</font>阶段 1：HTML+CSS
    - <font style="background:#F6E1AC;color:#664900">可选</font>[HTML 入门与实战](https://edu.aliyun.com/course/314253/)
    - <font style="background:#F6E1AC;color:#664900">可选</font>[CSS 快速掌握](https://edu.aliyun.com/course/314349/)
    - <font style="background:#F6E1AC;color:#664900">可选</font>[HTML5 新特性教程](https://edu.aliyun.com/course/313254/)
+ <font style="background:#DBF1B7;color:#2A4200">推荐</font>阶段 2：JavaScript
    - <font style="background:#DBF1B7;color:#2A4200">推荐</font>🌟 [JavaScript入门与实战](https://edu.aliyun.com/course/314202/)
        * <font style="background:#DBF1B7;color:#2A4200">推荐</font>🌟 补充学习 typescript
            + 理由：2020 年后各大公司的大部分 js 项目全面迁移为了 ts 项目
            + 心得：ts 可以简单理解为是 js 的超集（js + 类型 = ts），写法上有些变化需要注意
            + 可学习课程：
                - [TypeScript 入门教程](https://ts.xcatliu.com/)
                - [TypeScript 教程](https://wangdoc.com/typescript/)
            + 简版学习：
                - [TypeScript 实用基础](https://www.yuque.com/hanzebang/frontend/typescript-base)
                - [TypeScript 高级特性](https://www.yuque.com/hanzebang/frontend/typescript-advanced)
    - <font style="background:#F8CED3;color:#70000D">不推荐</font>~~jQuery开发教程~~
    - <font style="background:#F8CED3;color:#70000D">不推荐</font>~~Ajax 前端开发入门与实战~~
+ <font style="background:#DBF1B7;color:#2A4200">推荐</font>阶段 3：开发工具
    - <font style="background:#F8CED3;color:#70000D">不推荐</font>~~SVN版本控制系统~~
    - <font style="background:#DBF1B7;color:#2A4200">推荐</font>[Git 快速上手](https://edu.aliyun.com/course/489)
    - <font style="background:#F6E1AC;color:#664900">可选</font>[前端自动化构建工具 Webpack](https://edu.aliyun.com/course/314233/)
+ <font style="background:#DBF1B7;color:#2A4200">推荐</font>阶段 4：前端框架
    - <font style="background:#F6E1AC;color:#664900">可选</font>[Vue.js 入门与实战](https://edu.aliyun.com/course/314226/)
    - <font style="background:#DBF1B7;color:#2A4200">推荐</font>[React 入门与实战](https://edu.aliyun.com/course/314217/)
    - <font style="background:#F6E1AC;color:#664900">可选</font>[AngularJS 快速入门](https://edu.aliyun.com/course/313605/)
    - <font style="background:#F8CED3;color:#70000D">不推荐</font>~~Bootstrap 快速入门~~
+ <font style="background:#DBF1B7;color:#2A4200">推荐</font>阶段 5：移动及服务端开发
    - <font style="background:#F6E1AC;color:#664900">可选</font>[移动Web前端开发](https://edu.aliyun.com/course/314254/)
    - <font style="background:#DBF1B7;color:#2A4200">推荐</font>[Node.js 入门与实战](https://edu.aliyun.com/course/314237/)



其他学习资料：[https://roadmap.sh/](https://roadmap.sh/)

<h2 id="Vo5p1">快速学习计划</h2>
<h3 id="Dqpg9">环境准备</h3>
<h4 id="XGDCY">Node 环境（运行 node 脚本必备）</h4>

推荐使用 [nvm](https://github.com/nvm-sh/nvm) 工具管理 node 版本。

1. 安装 nvm

```bash
# curl 安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 或 wget 安装
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

2. 安装成功检查

```bash
$ nvm -v
0.40.3
```

3. 基础使用示例

```bash
# 安装新的 node 版本
$ nvm install v22
Downloading and installing node v22.19.0...
Downloading https://nodejs.org/dist/v22.19.0/node-v22.19.0-darwin-arm64.tar.xz...
############################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v22.19.0 (npm v10.9.3)

# 切换已安装的其他版本
$ nvm use v20
Now using node v20.19.0 (npm v10.8.2)
$ node -v
v20.19.0
```

4. nvm 常用命令

```bash
nvm list 查看已经安装的版本
nvm list installed 查看已经安装的版本
nvm list available 查看网络可以安装的版本
nvm version 查看当前的版本
nvm install 安装最新版本
nvm use <version> ## 切换使用指定的版本
nvm ls 列出所有版本 nvm current显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on 打开nodejs控制
nvm off 关闭nodejs控制
nvm proxy 查看设置与代理
nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 Index of /dist/
nvm npm_mirror [url] 设置或者查看setting.txt中的 npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/
nvm uninstall <version> 卸载制定的版本
nvm use [version] [arch] 切换制定的node版本和位数
nvm root [path] 设置和查看root路径
```



<h4 id="Rw20I">编辑器/终端工具（代码编辑工具）</h4>

+ VSCode 安装：通过[官网](https://code.visualstudio.com/)安装即可
+ 其他终端工具：推荐 [iterm2](https://iterm2.com/)，通过官网安装即可



<h4 id="MXnRW">Git 环境（管理项目代码版本）</h4>
MacOS 本身的 xcode-select 自带 Git 管理工具。

```bash
# 检查 git 是否可用
$ git -v
git version 2.39.5 (Apple Git-154)

# 如果 git 不可用，可以通过命令主动安装 xcode-select
$ xcode-select --install
```



<h3 id="POv5y">快速学习资料</h3>

七天学会NodeJS：[https://nqdeng.github.io/7-days-nodejs](https://nqdeng.github.io/7-days-nodejs)



<h2 id="g1y4q">其他资料</h2>

+ NodeJS 官网：[https://nodejs.org/zh-cn](https://nodejs.org/zh-cn)
    - 官方学习资料：[https://nodejs.org/zh-cn/learn](https://nodejs.org/zh-cn/learn)
    - 官网文档（查看不同版本的 API 细节等）：[https://nodejs.org/docs/latest/api/](https://nodejs.org/docs/latest/api/)
+ npm 官网：[https://www.npmjs.com/](https://www.npmjs.com/)
    - 同其他语言一样，npmjs 是所有 npm 包的仓库，这里的所有包都可以通过`npm i xxx`装到自己的项目中并使用。
+ GitHub 官网：[https://github.com/](https://github.com/)
    - GitHub是一个在线软件源代码托管服务平台，用于公开程序或软件的代码。上面有很多优秀的项目代码源码可以学习，自己的项目代码也可以上传上去。
+ React 官网：[https://react.dev/](https://react.dev/)
    - 中文官网：[https://zh-hans.react.dev/](https://zh-hans.react.dev/)
    - 三大主流应用框架（React、Vue、AngularJS）之一，开发前端应用需要掌握至少其中之一，蚂蚁体系常用 React。
+ Ant Design（antd）官网：[https://ant.design/index-cn](https://ant.design/index-cn)
    - 一套企业级 UI 设计语言和 React 组件库，蚂蚁体系常用 UI 组件库。
+ Umi 官网：[https://umijs.org/](https://umijs.org/)
    - 插件化的企业级前端应用框架，蚂蚁体系多部门使用。

