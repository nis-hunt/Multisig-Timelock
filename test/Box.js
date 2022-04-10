const { ethers } = require("hardhat");
const { expect } = require("chai");

// Above is the old way(commonjs) of importing a file,
// In a modern project(ES module), the above code would look like
// import { ethers } from "hardhat";
// import { expect } from "chai";
// but ES module is not supported in dependent files, so we work with above.

let Box;
let box;

// Start test block
describe("Box", () => {
  beforeEach(async () => {
    Box = await ethers.getContractFactory("Box");
    box = await Box.deploy();
    await box.deployed();
  });

  // Test case
  it("retrieve returns a value previously stored", async () => {
    // Store a value
    await box.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal("42");
  });

  // Test case 2:
  it("does not return a value not stored", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    numbers.map(async (num) => {
      await box.store(num);
      let _num = await box.retrieve().toString;
      expect(_num).to.equal(`${num}`);
      console.log(`stored value:${_num} == put value${num}`);
    });
  });

  it("retrieve returns a value previously stored", async () => {
    // Store a value
    await box.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal("42");
  });
});
