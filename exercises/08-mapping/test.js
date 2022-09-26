const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/CompanyStock.sol")).toBe(true);
});

test("08-steps", async () => {
  expect(await npx(["hardhat", "test", "test/08.test.ts"])).toBe(0);
});
