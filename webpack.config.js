const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    // 将入口点公开为 webpackNumbers ，以便用户可以通过脚本标签使用它
    // library: "webpackNumbers",

    // 构建产物作为一个库导出，并支持多种模块定义方式（UMD，包括CommonJS、AMD和作为全局变量）
    globalObject: 'this',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    }
  },

  // 外部化 Lodash
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_' // 全局变量
  //   }
  // }

  // 外部化 'lodash/reduce'，以减少打包体积
  externals: [
    // 方法一：直接指定字符串
    // 'lodash/reduce'
    // 方法二：或者使用正则表达式
    /^lodash\/.+$/
  ]
};