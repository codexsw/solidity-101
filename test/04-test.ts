import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("04", function () {
  async function deployOneYearLockFixture() {
    const NumberStorage = await ethers.getContractFactory("NumberStorage");
    const numberStorage = await NumberStorage.deploy();

    return { numberStorage };
  }

  describe("Deployment", function () {
    it("Store number", async function () {
      const { numberStorage } = await loadFixture(deployOneYearLockFixture);

      await numberStorage.setNumber1(1992);
      await numberStorage.setNumber2(2021);
      expect(await numberStorage.getSum()).to.equal(4013);
    });
  });
});
