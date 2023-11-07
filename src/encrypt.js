const JavaScriptObfuscator = require("javascript-obfuscator");

const encrypt = (jsCodeStr) => {
  return JavaScriptObfuscator.obfuscate(jsCodeStr).getObfuscatedCode();
};

module.exports = encrypt;
