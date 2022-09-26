const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/Locked.sol")).toBe(true);
});

test("18-steps", async () => {
  expect(await npx(["hardhat", "test", "test/18.test.ts"])).toBe(0);
});
