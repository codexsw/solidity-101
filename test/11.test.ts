import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("11", function () {
  async function deployOneYearLockFixture() {
    const EtherBank = await ethers.getContractFactory("EtherBank");
    const bank = await EtherBank.deploy();
    const [owner, addr1, addr2] = await ethers.getSigners();
    return { bank, owner, addr1, addr2 };
  }

  describe("deposit", function () {
    it("deposit 1 ether", async function () {
      const { bank, addr1 } = await loadFixture(deployOneYearLockFixture);
      await bank.deposit({ value: ethers.utils.parseEther("1") });
      expect(await bank.getBalance(addr1.address)).to.equal(
        ethers.utils.parseEther("1")
      );
    });
  });
});
