const { npx } = require("../../scripts/helper");

test("04-steps", async () => {
  expect(await npx(["hardhat", "test", "test/04.test.ts"])).toBe(0);
});
