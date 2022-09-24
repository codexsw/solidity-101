const { exec } = require("child_process");

test("01-steps", async () => {
  exec("npx hardhat test test/02-test.ts", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(`stdout: ${stdout}`);
  });
});
