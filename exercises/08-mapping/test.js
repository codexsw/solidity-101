const { npx } = require("../../scripts/helper");

test("08-steps", async () => {
  expect(await npx(["hardhat", "test", "test/08.test.ts"])).toBe(0);
});
