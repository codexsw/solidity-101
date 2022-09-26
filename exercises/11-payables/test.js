const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/EtherBank.sol")).toBe(true);
});

test("11-steps", async () => {
  expect(await npx(["hardhat", "test", "test/11.test.ts"])).toBe(0);
});
