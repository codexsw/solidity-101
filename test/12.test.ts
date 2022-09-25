import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("12", function () {
  async function deployOneYearLockFixture() {
    const EtherBank = await ethers.getContractFactory("EtherBank");
    const Attack = await ethers.getContractFactory("Attack");
    const bank = await EtherBank.deploy();
    const attacker = await Attack.deploy(bank.address);

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { bank, owner, addr1, addr2, attacker };
  }

  describe("deposit", function () {
    it("hack contract", async function () {
      const { bank, addr1, attacker, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(
        bank.connect(addr1).deposit({ value: ethers.utils.parseEther("10") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-10.0"));

      expect(await bank.connect(addr1).getBalance()).to.equal(
        ethers.utils.parseEther("10")
      );

      await expect(attacker.attack({ value: ethers.utils.parseEther("1.0") }))
        .to.be.reverted;
    });
  });
});
