const { npx } = require("../../scripts/helper");

test("03-steps", async () => {
  expect(await npx(["hardhat", "test", "test/03.test.ts"])).toBe(0);
});
