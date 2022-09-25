const { npx } = require("../../scripts/helper");

test("06-steps", async () => {
  expect(await npx(["hardhat", "test", "test/06.test.ts"])).toBe(0);
});
