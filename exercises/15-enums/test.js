const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/Insurance.sol")).toBe(true);
});

test("15-steps", async () => {
  expect(await npx(["hardhat", "test", "test/15.test.ts"])).toBe(0);
});
