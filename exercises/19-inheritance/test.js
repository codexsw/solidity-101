const { npx } = require("../../scripts/helper");

test("19-steps", async () => {
  expect(await npx(["hardhat", "test", "test/1.test.ts"])).toBe(0);
});
