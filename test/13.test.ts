import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("13", function () {
  async function deployOneYearLockFixture() {
    const Fundraiser = await ethers.getContractFactory("Fundraiser");
    const funds = await Fundraiser.deploy(ethers.utils.parseEther("10.0"));

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { funds, owner, addr1, addr2 };
  }

  describe("deposit", function () {
    it("deposit by several addresses", async function () {
      const { funds, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await funds
        .connect(addr1)
        .deposit({ value: ethers.utils.parseEther("1") });
      await funds
        .connect(addr2)
        .deposit({ value: ethers.utils.parseEther("1") });

      expect(await funds.getBalance()).to.be.equal(
        ethers.utils.parseEther("2")
      );
    });

    it("Deposit event emitted", async function () {
      const { funds, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(
        funds.connect(addr1).deposit({ value: ethers.utils.parseEther("1") })
      )
        .to.emit(funds, "Deposit")
        .withArgs(addr1.address, ethers.utils.parseEther("1"));
    });
  });
});
