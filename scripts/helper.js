const { spawn } = require("child_process");

module.exports = {
  npx: async (params) => {
    return new Promise((resolve, reject) => {
      const buffer = [];
      const ls = spawn("npx", params);

      ls.stdout.on("data", function (data) {
        buffer.push(data.toString());
      });

      ls.stderr.on("data", function (data) {
        buffer.push(data.toString());
      });

      ls.on("exit", function (code) {
        console.log(buffer.join(""));
        resolve(code);
      });
    });
  },
};
