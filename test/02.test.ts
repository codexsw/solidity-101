import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("02", function () {
  async function deployOneYearLockFixture() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld };
  }

  describe("Deployment", function () {
    it("Call hello", async function () {
      const { helloWorld } = await loadFixture(deployOneYearLockFixture);

      expect(await helloWorld.hello()).to.equal("Hello World!");
    });
  });
});
