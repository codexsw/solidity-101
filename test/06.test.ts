import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("06", function () {
  async function deployOneYearLockFixture() {
    const OwnableContract = await ethers.getContractFactory("OwnableContract");
    const ownable = await OwnableContract.deploy();
    const [owner, another] = await ethers.getSigners();
    return { ownable, owner, another };
  }

  describe("Deployment", function () {
    it("Contructor", async function () {
      const { ownable, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await ownable.owner()).to.equal(owner.address);
    });

    it("setOwner", async function () {
      const { ownable, another } = await loadFixture(deployOneYearLockFixture);
      await ownable.setOwner(another.address);
      expect(await ownable.owner()).to.equal(another.address);
    });
  });
});
