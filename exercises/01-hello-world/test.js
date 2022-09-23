const { exec } = require("child_process");

test("is all good", () => {
  expect(true).toBe(true);
});

test("01-steps", async () => {
  exec("npx hardhat test test/01-test.ts", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(`stdout: ${stdout}`);
  });
});
