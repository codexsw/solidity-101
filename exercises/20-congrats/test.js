const { npx } = require("../../scripts/helper");

test("20-steps", async () => {
  expect(await npx(["hardhat", "test"])).toBe(0);
});
