# 汤圆笔记（Docgaga）

    -- “捕捉稍纵即逝的灵感”

## 目录
1. 简介
2. 组件
3. 服务器部署指南
4. 浏览器插件部署指南
5. 注意事项

## 1. 介绍

  “汤圆笔记”是笔者(waychan23@github)于2017年出于个人需要，利用当时新学习的 NodeJs、MongoDB，OAuth2 等技术开发的一个笔记管理应用，包括 Chrome 浏览器插件及配套的服务器。

  <b>“捕捉稍纵即逝的灵感”</b>是笔者开发汤圆笔记的动机。如果读者您跟我一样，喜欢在浏览器上阅读各种文档，那么您很可能也经常在面对某一段话、某一个词给了你灵感的时候，会有一种冲动——“记笔记”。我们想就在这段话、这个词旁边写下我们的理解、我们的思考或者是我们的困惑，<b>就像上学的时候，我们会忍不住在课本上划线标记、在纸张空白处写下我们自己的思考</b>。

  这种记笔记的冲动，强烈却短暂，常常在我们在考虑记在什么地方，或者当我们终于决定记在某个外部的笔记软件上、并打开软件时，我们已经没有了这种冲动；就算成功地在某个软件记录下来了，当你阅读量比较大时，频繁的切换浏览器和笔记软件，也会慢慢磨灭我们的耐心。<b>就像我们不能在纸书上动笔，例如书是借的，我们不得不另外找个本子，把这些灵感记录下来，而我们可能最终因为找本子和笔，磨灭了我们记录的热情</b>。

  灵感，很多时候是零散的，并不能马上被结构化并在我们的知识体系中找到安放它的位置，它很可能需要在较长的时间内处于这种零散的状态。使用“外置”的笔记本来存储这样零散的信息，显得很无力。<b>我们会纠结于将这些信息点安放在哪个文件夹、是一个文档记录所有的信息点还是每个文档记录一个信息点、每个信息点怎么跟看到的它所在网页关联起来、怎么快速找到这个信息点在网页中的位置、这个网页中还有哪些相关的信息点、还有哪些来自其他网页的信息点跟它相关？</b>我们对于思考、对于记录的热情就是这样被磨灭在这样的纠结中。

  对于解决上面提到的问题，也许，汤圆笔记就是我们需要的。

  <b>
  汤圆笔记浏览器插件，可以让你在任意网页上发现有趣的文字的1秒钟内开始记录你的灵感，还能帮你记住文字所在的网页和在网页中位置。更方便的是，你还可以在任意页面上打开笔记列表对当前网页的、其他网页记过的笔记进行浏览、搜索并直接跳到笔记所在的页面并定位到标记所在的位置。
  </b>

  汤圆笔记不仅仅是浏览器插件，它提供了一个基于OAuth2认证授权的笔记资源管理服务器。有需要的开发者可以自行开发客户端接入。

  * 关于名称，“汤圆笔记”这个名称是一个灵感，如有雷同，纯属巧合。"Docgaga" 是另外一个灵感，意为“文档狂人”，笔者取之作为汤圆笔记代码库的名称。

  * 浏览器插件演示视频：https://v.qq.com/x/page/t0554z80wdv.html
  
  * 浏览器插件演示截图： 
  
    - 控制台
    ![Image text](https://raw.githubusercontent.com/waychan23/ref-resources/master/docgaga/img/demo-0002.png)
  
    - 笔记列表
    ![Image text](https://raw.githubusercontent.com/waychan23/ref-resources/master/docgaga/img/demo-0003.png)
  
    - 添加简单笔记
    ![Image text](https://raw.githubusercontent.com/waychan23/ref-resources/master/docgaga/img/demo-0004.png)
  
    - 标记页面内容
    ![Image text](https://raw.githubusercontent.com/waychan23/ref-resources/master/docgaga/img/demo-0005.png)
  
    - 添加页面标记注解
    ![Image text](https://raw.githubusercontent.com/waychan23/ref-resources/master/docgaga/img/demo-0006.png)

## 2. 组件

1. 汤圆笔记认证授权与资源服务器  
  - 代码库：https://github.com/waychan23/docgaga-server
  - 功能特性：
    * 注册服务
    * 登录服务
    * 找回密码服务
    * 笔记管理服务
    * 关键词管理服务
    * OAuth2 认证授权

2. 汤圆笔记浏览器插件应用服务器
  - 代码库：https://github.com/waychan23/docgaga-crx-server
  - 功能特性：
    * 为浏览器插件提供笔记管理API
    * 为浏览器插件提供关键词管理API

3. 汤圆笔记 Chrome 浏览器插件 
  - 代码库：https://github.com/waychan23/docgaga-crx
  - 功能特性：
    * 标注网页上的文字
    * 为网页上的文字做注解
    * 创建一个与网页关联的笔记
    * 在任意网页上查看笔记列表，笔记详情，编辑，删除笔记
    * 从笔记列表、笔记详情跳转到指定笔记所在页面和标注的位置
    * 支持配置使用该插件的网页/网站黑白名单
    * 支持配置笔记列表随页面自动打开、加载
    * 支持在当前网页上临时/永久关闭该插件

## 3. 服务器部署指南

为了方便部署，汤圆笔记提供了基于 docker stack 的整栈部署方案，可以实现一键部署。

* Docker stack 部署组件清单：
  1. docgaga-server:0.0.1：需要从 Git 代码库构建
  2. docgaga-crx-server:0.0.1：需要从 Git 代码库构建
  3. mongo:3.6.15
  4. nginx:latest
  5. mongo-express:latest：MongoDB Web管理工具（可选，默认关闭）

* 准备材料
  - 1个域名以及对应的 SSL 证书（Chrome强制要求插件使用HTTPS请求服务器资源），域名可以指向局域网地址或公网地址
  - Docker 环境（笔者使用的是 18.09.7）
  - 一定的磁盘空间供 MongoDB 存储数据


* 部署步骤
  1. 创建一个汤圆笔记专用的工作目录（下文用 $WORKDIR 指代）
  2. 拉取 docgaga-server, docgaga-crx-server, docgaga-devops 放在 $WORKDIR 下
  ```
  cd $WORKDIR
  git clone https://github.com/waychan23/docgaga-server
  git clone https://github.com/waychan23/docgaga-crx-server
  git clone https://github.com/waychan23/docgaga-devops
  ```

  3. 构建 docgaga-server Docker 镜像
  ```
  cd $WORKDIR/docgaga-server
  docker build . -t docgaga-server:0.0.1
  ```

  4. 构建 docgaga-crx-server Docker 镜像
  ```
  cd $WORKDIR/docgaga-crx-server
  docker build . -t docgaga-crx-server:0.0.1
  ```

  5. 编辑运行配置
  ```
  cd $WORKDIR/docgaga-devops

  # 打开 conf/docker-server/runtime-conf.js，编辑域名、端口、秘钥、数据库连接等信息
  # 打开 conf/docker-crx-server/runtime-conf.js，编辑域名、端口、秘钥、数据库连接等信息
  # 打开 nginx.conf，编辑域名、证书等
  # 打开 stack.yaml，编辑数据库初始化账号等参数，！！！注意修改 MongoDB 数据目录的挂在配置，将其挂在到主机上为它准备的持久化目录上
  ```

  6. 使用 docker stack 整栈部署
  ```
  cd $WORKDIR/docgaga-devops
  docker stack deploy -c stack.yaml docgaga

  # 可以使用如下命令查看组件部署的进度和情况
  docker stack ps docgaga

  # 如果部署成功，应该能在 docker stack ps 的输出中看到所有组件处于 Running 状态，并且能在 docker ps 中看到所有的组件对应的容器

  # 如果部署出现问题
  ```

  7. 数据库索引初始化
  ```
  本仓库的 init/db 目录下有两个 MongoDB JavaScript 脚本，第一次初始化 MongoDB 镜像时，会自动执行。如果使用已有的 MongoDB，请自行到数据库上执行这两个脚本。
  ```

  8. 服务器部署完成
  

## 4. 浏览器插件部署指南

  - 所需环境：
    NodeJS 8+
  
  - 步骤：
    1. 拉取 docgaga-crx 代码到工作目录（下文用 CRX_WORKDIR 指代）
    ```
    cd $CRX_WORKDIR
    git clone https://github.com/waychan23/docgaga-crx
    ```
    
    2. 修改 `src/js/conf/config.js` 文件中的服务器配置

    3. 安装依赖并进行构建
    ```
    cd $CRX_WORKDIR/docgaga-crx
    npm install
    npm run build
    # 如果是开发，可以使用 npm run watch，该命令会持续监控文件的修改，并自动重新构建
    ```

    4. 构建完成，$CRX_WORKDIR/docgaga-crx/build 即为插件的安装目录，该目录可以复制到其它位置

    5. 打开 Chrome 浏览器，打开插件管理页面，开启“开发者模式”，加载未打包（Unpack）目录，选择 $CRX_WORKDIR/docgaga-crx/build，确定即可

    6. 安装完成后，已打开的页面需要刷新才能加载汤圆笔记


## 5. 注意事项
  - 温馨提示：该项目代码主体是2年半以前完成的，受笔者当时水平的限制，代码质量不高，如有意见或建议请在 Issue 中提出，也欢迎自行动手优化，甚至重写

  - 开源之前的版本采集用 Redis 作为 Session 的存储，当时更多的是处于学习使用 Redis 的目的，所以在开源的版本中删除了 Redis 相关的使用，使用了本地内存作为 Session 存储，以简化部署。

  - 开源之前的版本集成了阿里云的邮件和短信服务，在开源的版本中删除了这些第三方服务的依赖。目前在注册和找回密码的步骤，页面上显示发送的短信验证码并不会真的发送，只会在 docgaga-server 的控制台信息打印，可以使用 docker logs -f <docgaga-server容器ID> 查看。
