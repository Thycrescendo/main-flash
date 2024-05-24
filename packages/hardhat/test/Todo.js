const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Todo", function () {
  let todo;

  before(async () => {
    const [owner] = await ethers.getSigners();
    const Todo = await ethers.getContractFactory("Todo");
    todo = await Todo.deploy(owner.address);
    await todo.deployed();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      expect(await todo.greeting()).to.equal("Building Unstoppable Apps!!!");
    });

    it("Should allow setting a new message", async function () {
      const newGreeting = "Learn Scaffold-ETH 2! :)";

      await todo.setGreeting(newGreeting);
      expect(await todo.greeting()).to.equal(newGreeting);
    });
  });
});
