const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    // 将入口点公开为 webpackNumbers ，以便用户可以通过脚本标签使用它
    library: "webpackNumbers",
  },
};