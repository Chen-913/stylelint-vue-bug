// 在这里需要导入开发依赖中的模块，所以需要单独禁用 eslint 的该条规则
/* eslint-disable import/no-extraneous-dependencies */
// 给部分 css 样式添加浏览器前缀
const presetPlugin = require('postcss-preset-env');
const px2rem = require('postcss-plugin-px2rem');

module.exports = {
  plugins: [
    presetPlugin,
    px2rem({
      rootValue: 192, // 换算基数， 192 这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
      unitPrecision: 5, // 允许REM单位增长到的十进制数字。
      // propWhiteList: [], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
      // propBlackList: [], //黑名单
      // exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      // selectorBlackList: [], //要忽略并保留为px的选择器
      // ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
      replace: false, // （布尔值）替换包含REM的规则，而不是添加回退。
      mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
      minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
    }),
  ],
};
