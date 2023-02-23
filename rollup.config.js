const { terser } = require("rollup-plugin-terser");

module.exports = {
  input: "./packages/less/src/less/functions/color.js",
  output: {
    file: "./my-build/color-functions.js",
    format: "es",
    plugins: [terser()],
  },
};
