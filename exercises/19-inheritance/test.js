const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/Token.sol")).toBe(true);
});

test("19-steps", async () => {
  expect(await npx(["hardhat", "test", "test/19.test.ts"])).toBe(0);
});
