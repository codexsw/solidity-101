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

      await expect(
        bank.connect(addr1).deposit({ value: ethers.utils.parseEther("1") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-1.0"));

      expect(await bank.connect(addr1).getBalance()).to.equal(
        ethers.utils.parseEther("1")
      );
    });

    it("more deposits", async function () {
      const { bank, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(
        bank.connect(addr1).deposit({ value: ethers.utils.parseEther("0.5") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-0.5"));

      await await expect(() =>
        bank.connect(addr2).deposit({ value: ethers.utils.parseEther("0.25") })
      ).to.changeEtherBalance(addr2, ethers.utils.parseEther("-0.25"));

      expect(await ethers.provider.getBalance(bank.address)).to.equal(
        ethers.utils.parseEther("0.75")
      );
    });
  });

  describe("withdraw", function () {
    it("widthdraw 1 ether", async function () {
      const { bank, addr1 } = await loadFixture(deployOneYearLockFixture);

      await expect(
        bank.connect(addr1).deposit({ value: ethers.utils.parseEther("2") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-2.0"));

      await expect(
        bank.connect(addr1).widthdraw(ethers.utils.parseEther("1.0"))
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("1.0"));
    });

    it("reverted if lower balance", async function () {
      const { bank, addr1 } = await loadFixture(deployOneYearLockFixture);

      bank.connect(addr1).deposit({ value: ethers.utils.parseEther("2.0") });
      await expect(
        bank.connect(addr1).widthdraw(ethers.utils.parseEther("3.0"))
      ).to.be.revertedWith("low-balance");
    });
  });
});
