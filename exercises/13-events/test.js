const { npx } = require("../../scripts/helper");

test("11-steps", async () => {
  expect(await npx(["hardhat", "test", "test/11.test.ts"])).toBe(0);
});
