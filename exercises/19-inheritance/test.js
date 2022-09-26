const { npx } = require("../../scripts/helper");

test("19-steps", async () => {
  expect(await npx(["hardhat", "test", "test/19.test.ts"])).toBe(0);
});
