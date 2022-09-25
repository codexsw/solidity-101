const { npx } = require("../../scripts/helper");

test("10-steps", async () => {
  expect(await npx(["hardhat", "test", "test/10.test.ts"])).toBe(0);
});
