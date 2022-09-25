const { npx } = require("../../scripts/helper");

test("16-steps", async () => {
  expect(await npx(["hardhat", "test", "test/16.test.ts"])).toBe(0);
});
