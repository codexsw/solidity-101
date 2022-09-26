import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("05", function () {
  async function deployFixture() {
    const NumberStorage = await ethers.getContractFactory("NumberStorage05");
    return { NumberStorage };
  }

  describe("Deployment", function () {
    it("Store numbers", async function () {
      const { NumberStorage } = await loadFixture(deployFixture);
      const numberStorage = await NumberStorage.deploy(1992, 2021);
      await numberStorage.deployed();

      expect(await numberStorage.number1()).to.equal(1992);
      expect(await numberStorage.number2()).to.equal(2021);
    });

    it("getSum", async function () {
      const { NumberStorage } = await loadFixture(deployFixture);
      const numberStorage = await NumberStorage.deploy(233, 998);
      await numberStorage.deployed();

      expect(await numberStorage.getSum()).to.equal(998 + 233);
    });
  });
});
