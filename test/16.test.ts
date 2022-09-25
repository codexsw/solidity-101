import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("16", function () {
  async function deployOneYearLockFixture() {
    const FIFOQueue = await ethers.getContractFactory("FIFOQueue");
    const queue = await FIFOQueue.deploy();
    const [owner, addr1, addr2] = await ethers.getSigners();
    return { queue, owner, addr1, addr2 };
  }

  describe("enqueue", function () {
    it("enqueue", async function () {
      const { queue, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await queue.enqueue(addr1.address);
      expect(await queue.dequeue()).to.be.equal(addr1.address);
    });
  });

  describe("dequeue", function () {
    it("dequeue", async function () {
      const { queue, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await queue.enqueue(addr1.address);
      await queue.enqueue(addr2.address);
      expect(await queue.dequeue()).to.be.equal(addr1.address);
      expect(await queue.dequeue()).to.be.equal(addr2.address);
    });
  });

  describe("length", function () {
    it("length", async function () {
      const { queue, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await queue.enqueue(addr1.address);
      await queue.enqueue(addr2.address);
      expect(await queue.length()).to.be.equal(2);
    });
  });

  describe("head", function () {
    it("head", async function () {
      const { queue, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await queue.enqueue(addr1.address);
      await queue.enqueue(addr2.address);
      expect(await queue.head()).to.be.equal(addr1.address);
    });
  });

  describe("moveToEnd", function () {
    it("moveToEnd", async function () {
      const { queue, owner, addr1, addr2 } = await loadFixture(
        deployOneYearLockFixture
      );

      await queue.enqueue(addr1.address);
      await queue.enqueue(addr2.address);
      await queue.moveToEnd(addr1.address);
      expect(await queue.head()).to.be.equal(addr2.address);
      expect(await queue.dequeue()).to.be.equal(addr2.address);
      expect(await queue.dequeue()).to.be.equal(addr1.address);
    });
  });
});
