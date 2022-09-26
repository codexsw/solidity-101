const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/FIFOQueue.sol")).toBe(true);
});

test("16-steps", async () => {
  expect(await npx(["hardhat", "test", "test/16.test.ts"])).toBe(0);
});
