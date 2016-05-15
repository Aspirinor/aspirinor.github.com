---
layout: post
title: 写在博客的开始
subtitle: Hello, the new world
author: Aspirinor
header-img: img/home-bg-o.jpg 
catalog: true
date: 2016-05-14 11:30:38 +0800
tag: 其他
---
## 前言

折腾了两个晚上，总算是建立起了这个博客。起因是原本在新浪云用worldpress搭建的博客因为欠了云豆被回收。本来的打算是用其他的第三方博客系统，不过想了想，还是自己搭建一个最好。然后就偶然间看到了 **jekyll** 和 **github** 联合起来搭建的几个网站，觉得还不错，就想说自己也搭建一个。虽然搭建这个博客可能需要一些编程的知识，不过还好 **Google** 是如此的强大，中间遇到的问题基本google都可以解决掉，所以最终顺利地搭建起了这个博客。

## 博客的内容

搭建这个博客其实也只是兴趣使然，一直想要有一个属于自己的主页。至于博客的内容，可能就是

* 学习外语的笔记
* 影评或者书评
* 自己的随想
* 某些技巧类的东西
* 可能的话，写一些科普文章（在自己已有的知识内）

总的来说，什么乱七八糟的东西都会写一点


## 搭建过程

jekyll本身对Mac的支持更好一点，主要是ruby环境对Mac的支持更好。不过windows还是可以搭建起来的。我的电脑系统是win10，也很顺利地完成了整个过程。

整个搭建过程可以分为四步：

#### 一 安装ruby和devkit

这是第一步，也是很重要的一步，因为jekyll的安装需要这个环境，具体的安装方法可以自行google，
这里推荐一篇博文，搭建可以参考

* [搭建jekyll博客](http://www.itwenku.net/dev/20160103/2152.html)

安装成功以后，在CMD中执行

    ruby -v

如果返回版本号说明安装成功。

#### 二 安装jekyll

执行

    gem install jekyll

最好在墙外执行这个操作，墙内执行速度据说超慢。

然后执行

    jekyll -v

返回版本号说明安装成功。

中间细节部分参考上面那篇博文。

#### 三 创建Github库并创建Github Pages

之所以有这一步是因为我的网站是部署在github上的。这样做的好处是免费且不限流量，

这一步需要有github的账号。创建新库并命名为username.github.com。然后创建一个github pages。这个准备工作就做好了。

这一步以及下一步可以参考

* [Jekyll本地搭建开发环境以及Github部署流程](http://pizida.com/technology/2016/03/03/use-jekyll-create-blog-on-github/#github-pages)

#### 四 将网站部署至github的库

这一步完全参考上面的博文。

这一步需要有git这个软件，可以在[git简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)下载。

但是参考上面的博文建立的网站太简单，所以我又去找了模板。最后只要修改好模板的部署文件和主页面文件，在上传到github就可以了。

到这里，网站就完全建好啦。

## 后记

这个博客的模板是[@Hux黄玄](http://weibo.com/u/1787076481?topnav=1&wvr=6&topsug=1&is_hot=1)的作品，十分感谢。

这个博客的搭建可能不只是随便玩玩。记得学长说，如果长时间不写东西，最终笔锋会钝。所以要加油呢，努力读书，努力写作，to be a good man。

