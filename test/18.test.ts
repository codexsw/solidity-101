import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("18", function () {
  async function deployFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    const Locked = await ethers.getContractFactory("Locked");
    const lock = await Locked.deploy(ONE_YEAR_IN_SECS, { value: ONE_GWEI });
    return { lock, unlockTime, ONE_YEAR_IN_SECS };
  }

  describe("OneYearLock", function () {
    it("should lock for one year", async function () {
      const { lock, ONE_YEAR_IN_SECS } = await loadFixture(deployFixture);
      const lockTime = await lock.timeRemaining();
      expect(lockTime).to.equal(ONE_YEAR_IN_SECS);
    });

    it("should fail in time not passed", async function () {
      const { lock } = await loadFixture(deployFixture);
      await expect(lock.withdraw()).to.be.reverted;
    });

    it("should succeed if time passed", async function () {
      const { lock, ONE_YEAR_IN_SECS } = await loadFixture(deployFixture);
      await time.increase(ONE_YEAR_IN_SECS);
      await expect(lock.withdraw()).not.to.be.reverted;
    });
  });
});
