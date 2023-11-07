#!/usr/bin/env node
const { program } = require("commander");
const { version } = require("../package.json");
const handler = require("./handler");

program
  .name("jsect")
  .description("一个JavaScript程序加密CLI工具")
  .version(`v${version}`, "-v, --version", "输出当前版本")
  .option("-in,--input <string>", "指定源文件的路径")
  .option("-out,--output <string>", "指定输出文件的路径")
  .parse(process.argv);

handler(program.opts());
