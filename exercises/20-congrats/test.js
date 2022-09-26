const { npx } = require("../../scripts/helper");

test("29-steps", async () => {
  expect(await npx(["hardhat", "test"])).toBe(0);
});
