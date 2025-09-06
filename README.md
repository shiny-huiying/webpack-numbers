

> 查看 https://webpack.js.org/guides/author-libraries/

## 项目目标
允许用户将数字 1 到 5 从数字表示转换为文本表示，反之亦然，例如将 2 转换为“two”。

## 注意
- 将 lodash 安装为 devDependencies 而不是 dependencies ，因为我们不想将其捆绑到我们的库中，否则我们的库很容易膨胀。

## 版本变化

### v0.0.1

构建产物
构建出来的js文件没有 numToWord() 和 wordToNum()，也没有从 ref.json 引入的变量，难道是被“树摇”掉了？

<img src="assets/image-20250906213632232.png" alt="image-20250906213632232" style="zoom:50%;" />




