const { exec } = require("child_process");

test("03-steps", async () => {
  exec("npx hardhat test test/03-test.ts", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(`stdout: ${stdout}`);
  });
});
