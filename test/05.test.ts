import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("05", function () {
  async function deployOneYearLockFixture() {
    const NumberStorage = await ethers.getContractFactory("NumberStorage05");
    return { NumberStorage };
  }

  describe("Deployment", function () {
    it("Store numbers", async function () {
      const { NumberStorage } = await loadFixture(deployOneYearLockFixture);
      await NumberStorage.deploy(1992, 2021);

      expect(await numberStorage.number1()).to.equal(1992);
      expect(await numberStorage.number2()).to.equal(2021);
    });

    it("getSum", async function () {
      const { NumberStorage } = await loadFixture(deployOneYearLockFixture);
      await NumberStorage.deploy(233, 998);

      expect(await numberStorage.getSum()).to.equal(998 + 233);
    });
  });
});
