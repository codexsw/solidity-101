const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/Whitelist.sol")).toBe(true);
});

test("14-steps", async () => {
  expect(await npx(["hardhat", "test", "test/14.test.ts"])).toBe(0);
});
