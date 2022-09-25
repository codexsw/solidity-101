import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("09", function () {
  async function deployOneYearLockFixture() {
    const CompanyShares = await ethers.getContractFactory("CompanyStock");
    const company = await CompanyShares.deploy();
    const [owner, addr1, addr2] = await ethers.getSigners();
    return { company, owner, addr1, addr2 };
  }

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
      expect(await company.getTotalShares()).to.equal(3345 + 3332);
    });
  });

  describe("transferShares", function () {
    it("transfer shares", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 1000);
      await company.setShares(addr2.address, 1000);
      await company.transferStock(500, addr1.address, addr2.address);
      expect(await company.getShares(addr1.address)).to.equal(500);
      expect(await company.getShares(addr2.address)).to.equal(1500);
    });

    it("transfer 0 should revert", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 1000);
      await company.setShares(addr2.address, 1000);
      await expect(company.transferStock(0, addr1.address, addr2.address)).to.be
        .reverted;
    });

    it("transfer more stock than available should revert", async function () {
      const { company, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await company.setShares(addr1.address, 1000);
      await company.setShares(addr2.address, 1000);
      const op = company.transferStock(2000, addr1.address, addr2.address);
      await expect(op).to.be.reverted;
      await expect(op).not.to.be.revertedWithPanic(0x11);
      console.log(await company.getShares(addr1.address));
      console.log(await company.getShares(addr2.address));
    });
  });
});
