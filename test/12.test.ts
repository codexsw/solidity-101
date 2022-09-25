import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("12", function () {
  async function deployOneYearLockFixture() {
    const EtherBank = await ethers.getContractFactory("EtherBank");
    const bank = await EtherBank.deploy();

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { bank, owner, addr1, addr2 };
  }

  describe("deposit", function () {
    it("widthdraw with re-entrancy guard", async function () {
      const { bank, owner, addr1 } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(
        bank.deposit({ value: ethers.utils.parseEther("10") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-10.0"));

      await expect(
        bank.connect(addr1).deposit({ value: ethers.utils.parseEther("10") })
      ).to.changeEtherBalance(addr1, ethers.utils.parseEther("-10.0"));

      expect(await bank.connect(addr1).getBalance()).to.equal(
        ethers.utils.parseEther("20")
      );
    });
  });
});
