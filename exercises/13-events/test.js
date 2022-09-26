const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/Fundraiser.sol")).toBe(true);
});

test("13-steps", async () => {
  expect(await npx(["hardhat", "test", "test/13.test.ts"])).toBe(0);
});
