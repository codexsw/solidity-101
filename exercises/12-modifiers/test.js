const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/EtherBank.sol")).toBe(true);
});

test("12-steps", async () => {
  expect(await npx(["hardhat", "test", "test/12.test.ts"])).toBe(0);
});
