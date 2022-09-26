const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/NumberStorage04.sol")).toBe(true);
});

test("04-steps", async () => {
  expect(await npx(["hardhat", "test", "test/04.test.ts"])).toBe(0);
});
