const { npx, fileExists } = require("../../scripts/helper");

test("contract-exists", async () => {
  expect(fileExists("./contracts/HelloWorld.sol")).toBe(true);
});

test("02-steps", async () => {
  expect(await npx(["hardhat", "test", "test/02.test.ts"])).toBe(0);
});
