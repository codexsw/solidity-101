import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("15", function () {
  async function deployOneYearLockFixture() {
    const Insurance = await ethers.getContractFactory("Insurance");
    const insurance = await Insurance.deploy();
    return { insurance };
  }

  describe("changeStatus", function () {
    it("changeStatus", async function () {
      const { insurance } = await loadFixture(deployOneYearLockFixture);
      await insurance.changeStatus(ethers.BigNumber.from(1));
      expect(await insurance.getStatus()).to.equal(ethers.BigNumber.from(1));
    });
  });
});
