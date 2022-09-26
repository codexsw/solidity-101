import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("06", function () {
  async function deployFixture() {
    const CompanyShares = await ethers.getContractFactory("CompanyShares");
    const company = await CompanyShares.deploy(10);
    return { company };
  }

  describe("Deployment", function () {
    it("Contructor", async function () {
      const { company } = await loadFixture(deployFixture);
      expect(await company.totalShares()).to.equal(10);
    });
  });

  describe("buyShares", function () {
    it("add to total shares", async function () {
      const { company } = await loadFixture(deployFixture);
      await company.buyShares(3345);
      expect(await company.totalShares()).to.equal(10 + 3345);
    });

    it("add more shares", async function () {
      const { company } = await loadFixture(deployFixture);
      await company.buyShares(3345);
      await company.buyShares(899);
      expect(await company.totalShares()).to.equal(10 + 3345 + 899);
    });
  });

  describe("sellShares", function () {
    it("sell shares", async function () {
      const { company } = await loadFixture(deployFixture);
      await company.buyShares(3345);
      await company.sellShares(765);
      expect(await company.totalShares()).to.equal(10 + 3345 - 765);
    });

    it("sell even more shares", async function () {
      const { company } = await loadFixture(deployFixture);
      await company.buyShares(3345);
      await company.sellShares(765);
      await company.sellShares(98);
      expect(await company.totalShares()).to.equal(10 + 3345 - 765 - 98);
    });
  });
});
