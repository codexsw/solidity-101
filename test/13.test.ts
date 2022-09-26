import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("13", function () {
  async function deployFixture() {
    const Fundraiser = await ethers.getContractFactory("Fundraiser");
    const funds = await Fundraiser.deploy(ethers.utils.parseEther("10.0"));

    const [owner, addr1, addr2] = await ethers.getSigners();
    return { funds, owner, addr1, addr2 };
  }

  describe("deposit", function () {
    it("deposit by several addresses", async function () {
      const { funds, addr1, addr2 } = await loadFixture(deployFixture);

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
      const { funds, addr1, addr2 } = await loadFixture(deployFixture);

      await expect(
        funds.connect(addr1).deposit({ value: ethers.utils.parseEther("1") })
      )
        .to.emit(funds, "Deposit")
        .withArgs(addr1.address, ethers.utils.parseEther("1"));
    });
  });

  describe("withdraw", function () {
    it("withdraw", async function () {
      const { funds, owner, addr1, addr2 } = await loadFixture(deployFixture);

      await funds
        .connect(addr1)
        .deposit({ value: ethers.utils.parseEther("1") });
      await funds
        .connect(addr2)
        .deposit({ value: ethers.utils.parseEther("1") });

      await funds.connect(owner).withdraw();
      expect(await funds.getBalance()).to.be.equal(
        ethers.utils.parseEther("0")
      );
    });

    it("Withdraw event emitted", async function () {
      const { funds, owner, addr1, addr2 } = await loadFixture(deployFixture);

      await funds
        .connect(addr1)
        .deposit({ value: ethers.utils.parseEther("1") });
      await funds
        .connect(addr2)
        .deposit({ value: ethers.utils.parseEther("1") });

      await expect(funds.connect(owner).withdraw()).to.emit(funds, "Withdraw");
    });
  });
});
