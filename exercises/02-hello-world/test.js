const { npx } = require("../../scripts/helper");
const fs = require("fs");
const { expect } = require("chai");

const fileExists = (path) => {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

test("contract-exists", async () => {
  expect(fileExists("../../contracts/HelloWorld.sol")).to.be.true;
});

test("02-steps", async () => {
  expect(await npx(["hardhat", "test", "test/02.test.ts"])).toBe(0);
});
