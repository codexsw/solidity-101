import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("19", function () {
  async function deployOneYearLockFixture() {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    const [owner, addr1] = await ethers.getSigners();
    return { token, owner, addr1 };
  }

  describe("transfer", function () {
    it("should transfer", async function () {
      const { token, owner, addr1 } = await loadFixture(
        deployOneYearLockFixture
      );
      await token.transfer(addr1.address, 100);
      expect(await token.balanceOf(addr1.address)).to.equal(100);
    });

    it("should fail if not enough balance", async function () {
      const { token, owner, addr1 } = await loadFixture(
        deployOneYearLockFixture
      );
      await expect(token.connect(addr1).transfer(addr1.address, 100)).to.be
        .reverted;
    });
  });
});
