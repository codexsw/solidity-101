import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("04", function () {
  async function deployFixture() {
    const NumberStorage = await ethers.getContractFactory("NumberStorage04");
    const numberStorage = await NumberStorage.deploy();

    return { numberStorage };
  }

  describe("Deployment", function () {
    it("Store numbers", async function () {
      const { numberStorage } = await loadFixture(deployFixture);

      await numberStorage.setNumber1(1992);
      await numberStorage.setNumber2(2021);
      expect(await numberStorage.number1()).to.equal(1992);
      expect(await numberStorage.number2()).to.equal(2021);
    });

    it("getSum", async function () {
      const { numberStorage } = await loadFixture(deployFixture);

      await numberStorage.setNumber1(233);
      await numberStorage.setNumber2(998);
      expect(await numberStorage.getSum()).to.equal(998 + 233);
    });
  });
});
