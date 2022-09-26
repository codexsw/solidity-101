import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("18", function () {
  async function deployOneYearLockFixture() {
    const Locked = await ethers.getContractFactory("Locked");
    const lock = await Locked.deploy();
    return { lock };
  }

  describe("OneYearLock", function () {
    it("should lock for one year", async function () {
      const { lock } = await loadFixture(deployOneYearLockFixture);
      const lockTime = await lock.lockTime();
      expect(lockTime).to.equal(31536000);
    });
  });
});
