import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("03", function () {
  async function deployOneYearLockFixture() {
    const NumberStorage = await ethers.getContractFactory("NumberStorage");
    const numberStorage = await NumberStorage.deploy();

    return { numberStorage };
  }

  describe("Deployment", function () {
    it("Store number", async function () {
      const { numberStorage } = await loadFixture(deployOneYearLockFixture);

      await numberStorage.setNumber(1992);
      expect(await numberStorage.number()).to.equal(1992);
    });
  });
});
