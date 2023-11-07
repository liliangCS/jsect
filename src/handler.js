const { readFile, writeFile } = require("node:fs/promises");
const { resolve } = require("node:path");
const colors = require("colors/safe");
const encrypt = require("./encrypt");

const handler = async (options) => {
  try {
    const { input, output } = options;
    if (!input || !output) {
      return console.log(colors.bgBlue("请指定 -in 和 -out 参数, 缺一不可!"));
    }
    const jsCodeStr = await readFile(resolve(process.cwd(), input), {
      encoding: "utf8",
    });

    await writeFile(resolve(process.cwd(), output), encrypt(jsCodeStr), {
      encoding: "utf8",
    });
    console.log(colors.blue("Tips:"), colors.green("源文件加密成功!"));
    console.log(
      colors.blue("输出文件目录:"),
      colors.green(resolve(process.cwd(), output))
    );
  } catch (error) {
    console.log(colors.blue("Tips:"), colors.red("源文件加密失败!"));
    console.log(colors.blue("程序发生错误:"), colors.red(error.message));
  }
};

module.exports = handler;
