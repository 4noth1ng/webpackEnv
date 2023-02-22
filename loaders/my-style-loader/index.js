const loaderUtils = require("loader-utils");

const loaderFn = () => {
  //   // 测试
  //   let style = `
  //         let style = document.createElement('style')
  //         style.innerHTML = ${JSON.stringify(source)}
  //         document.head.appendChild(style)
  //     `;
  //   return style;
};

// remainingRequest：loader链中排在自己后面的 loader 以及资源文件的绝对路径以`!`作为连接符组成的字符串。
// precedingRequest：loader链中排在自己前面的 loader 的绝对路径以`!`作为连接符组成的字符串。
// data：每个 loader 中存放在上下文中的固定字段，可用于 pitch 给 loader 传递数据
loaderFn.pitch = function (remainingRequest, precedingRequest, data) {
  // 剩余的读取绝对路径
  // 自定义条件
  var api = require(`${loaderUtils.stringifyRequest(
    this,
    `!${path.join(__dirname, "runtime/injectStylesIntoLinkTag.js")}`
  )}`);
  // 引入公共的runtime模块

  // 引入 css 模块
  var content = require(`${loaderUtils.stringifyRequest(
    this,
    `!!${remainingRequest}`
  )}`);
  // content = require('!!css-loader!less-loader!./xxx.less');
  //
};
module.exports = loaderFn;
