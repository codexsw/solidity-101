const { npx } = require("../../scripts/helper");

test("13-steps", async () => {
  expect(await npx(["hardhat", "test", "test/13.test.ts"])).toBe(0);
});
