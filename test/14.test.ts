import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("14", function () {
  async function deployOneYearLockFixture() {
    const Whitelist = await ethers.getContractFactory("Whitelist");
    const list = await Whitelist.deploy();

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { list, owner, addr1, addr2 };
  }

  describe("add", function () {
    it("add", async function () {
      const { list, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await list.add(addr1.address);
      expect(await list.isWhitelisted(addr1.address)).to.be.true;
    });
  });

  describe("remove", function () {
    it("remove", async function () {
      const { list, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await list.add(addr1.address);
      expect(await list.isWhitelisted(addr1.address)).to.be.true;

      await list.remove(addr1.address);
      expect(await list.isWhitelisted(addr1.address)).to.be.false;
    });
  });

  describe("getMaxMint", function () {
    it("getMaxMint", async function () {
      const { list, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await list.add(addr1.address);
      expect(await list.isWhitelisted(addr1.address)).to.be.true;

      await list.setMaxMint(addr1.address, 10);
      expect(await list.getMaxMint(addr1.address)).to.be.equal(10);
    });
  });

  describe("getMinted", function () {
    it("getMinted", async function () {
      const { list, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await list.add(addr1.address);
      expect(await list.isWhitelisted(addr1.address)).to.be.true;

      await list.setMinted(addr1.address, 10);
      expect(await list.getMinted(addr1.address)).to.be.equal(10);
    });
  });
});
