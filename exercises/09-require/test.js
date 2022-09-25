const { npx } = require("../../scripts/helper");

test("09-steps", async () => {
  expect(await npx(["hardhat", "test", "test/09.test.ts"])).toBe(0);
});
