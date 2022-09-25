import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("06", function () {
  async function deployOneYearLockFixture() {
    const CompanyShares = await ethers.getContractFactory("CompanyStock");
    const company = await CompanyShares.deploy();
    const [owner, addr1, addr2] = await ethers.getSigners();
    return { company, owner, addr1, addr2 };
  }

  describe("Deployment", function () {
    it("Contructor", async function () {
      const { company } = await loadFixture(deployOneYearLockFixture);
      expect(await company.getTotalShares()).to.equal(0);
    });
  });

  describe("setShares", function () {
    it("set shares to address 1", async function () {
      const { company, addr1 } = await loadFixture(deployOneYearLockFixture);
      await company.setShares(addr1.address, 10000);
      expect(await company.getShares(addr1.address)).to.equal(10000);
    });

    it("address 1 and address 2", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 3345);
      await company.setShares(addr2.address, 18900);

      expect(await company.getShares(addr1.address)).to.equal(3345);
      expect(await company.getShares(addr2.address)).to.equal(18900);
    });

    it("override address 1 shares", async function () {
      const { company, addr1 } = await loadFixture(deployOneYearLockFixture);
      await company.setShares(addr1.address, 3345);
      await company.setShares(addr1.address, 18900);

      expect(await company.getShares(addr1.address)).to.equal(18900);
    });
  });

  describe("getTotalShares", function () {
    it("gets total supply", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 3345);
      await company.setShares(addr2.address, 18900);
      expect(await company.getTotalShares()).to.equal(22245);
    });

    it("gets total supply after sell", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 3345);
      await company.setShares(addr2.address, 18900);
      await company.setShares(addr2.address, 3332);
      expect(await company.getTotalShares()).to.equal(3345 + 18900 - 3332);
    });
  });
});
