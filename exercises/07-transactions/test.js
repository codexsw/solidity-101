const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/CompanyShares.sol")).toBe(true);
});

test("07-steps", async () => {
  expect(await npx(["hardhat", "test", "test/07.test.ts"])).toBe(0);
});
