const { npx } = require("../../scripts/helper");

test("07-steps", async () => {
  expect(await npx(["hardhat", "test", "test/07.test.ts"])).toBe(0);
});
