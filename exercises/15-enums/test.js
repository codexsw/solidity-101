const { npx } = require("../../scripts/helper");

test("15-steps", async () => {
  expect(await npx(["hardhat", "test", "test/15.test.ts"])).toBe(0);
});
