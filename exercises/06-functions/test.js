const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/OwnableContract.sol")).toBe(true);
});

test("06-steps", async () => {
  expect(await npx(["hardhat", "test", "test/06.test.ts"])).toBe(0);
});
