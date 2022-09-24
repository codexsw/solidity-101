const { npx } = require("../../scripts/helper");

test("02-steps", async () => {
  expect(await npx(["hardhat", "test", "test/02.test.ts"])).toBe(0);
});
