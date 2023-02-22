class HelloWorldPlugin {
  constructor(options = {}) {
    this.options = options;
    this.filename = options.filename || "file-list";
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "HelloWorld",
      (compilation, compilationParams) => {
        compilation.hooks.afterOptimizeAssets.tap("HelloWorld", (assets) => {
          const fileListName = this.options.filename;
          let len = Object.keys(compilation.assets).length;
          let content = `#一共有${len}个文件\n\n`;
          // console.log(compilation.assets);
          for (let name in compilation.assets) {
            content += `-${name}\n`;
          }
          compilation.assets[fileListName] = {
            source: function () {
              return content;
            },
            size: function () {
              return content.length;
            },
          };
          // console.log(compilation.assets);
        });
        // console.log(111);
      }
    );
  }
}

module.exports = HelloWorldPlugin;
