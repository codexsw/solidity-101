import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("02", function () {
  async function deployFixture() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld };
  }

  describe("Deployment", function () {
    it("Call hello", async function () {
      const { helloWorld } = await loadFixture(deployFixture);

      expect(await helloWorld.hello()).to.equal("Hello World!");
    });
  });
});
