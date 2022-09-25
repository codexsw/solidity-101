const { npx } = require("../../scripts/helper");

test("14-steps", async () => {
  expect(await npx(["hardhat", "test", "test/14.test.ts"])).toBe(0);
});
