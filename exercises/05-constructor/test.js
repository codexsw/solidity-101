const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/NumberStorage05.sol")).toBe(true);
});

test("05-steps", async () => {
  expect(await npx(["hardhat", "test", "test/05.test.ts"])).toBe(0);
});
