import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("12", function () {
  async function deployFixture() {
    const EtherBank = await ethers.getContractFactory("EtherBank");
    const bank = await EtherBank.deploy();

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { bank, owner, addr1, addr2 };
  }

  describe("deposit", function () {
    it("widthdraw with onlyOwner guard", async function () {
      const { bank, owner, addr1 } = await loadFixture(deployFixture);

      await expect(
        bank.deposit({ value: ethers.utils.parseEther("10") })
      ).to.changeEtherBalance(owner, ethers.utils.parseEther("-10.0"));

      await expect(bank.ownerWithdraw(ethers.utils.parseEther("1.0"))).not.to.be
        .reverted;
    });

    it("should fail if another address tries to use ownerWithdraw", async function () {
      const { bank, owner, addr1 } = await loadFixture(deployFixture);

      await expect(
        bank.deposit({ value: ethers.utils.parseEther("10") })
      ).to.changeEtherBalance(owner, ethers.utils.parseEther("-10.0"));

      await expect(
        bank.connect(addr1).ownerWithdraw(ethers.utils.parseEther("1.0"))
      ).to.be.revertedWith("not-owner");
    });
  });
});
