const { npx } = require("../../scripts/helper");

test("12-steps", async () => {
  expect(await npx(["hardhat", "test", "test/12.test.ts"])).toBe(0);
});
