import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("01", function () {
  async function deployOneYearLockFixture() {
    const [owner] = await ethers.getSigners();

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { owner, helloWorld };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { helloWorld, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await helloWorld.owner()).to.equal(owner.address);
    });
  });
});
