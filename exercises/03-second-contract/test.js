const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/NumberStorage.sol")).toBe(true);
});

test("03-steps", async () => {
  expect(await npx(["hardhat", "test", "test/03.test.ts"])).toBe(0);
});
