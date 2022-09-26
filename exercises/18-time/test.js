const { npx } = require("../../scripts/helper");

test("18-steps", async () => {
  expect(await npx(["hardhat", "test", "test/18.test.ts"])).toBe(0);
});
