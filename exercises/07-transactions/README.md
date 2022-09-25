# `07` Transactions

Transactions are the only way to modify data in a smart contract. Also, transactions can receive or send Ether. Since they modify data in the smart contract, they are executed when they are sent to the blockchain.

Transactions are executed in the order they are sent to the blockchain. If a transaction modifies data in the smart contract, the new data will be available to the next transaction.

## Instructions

1. Copy the following code into the `contracts/CompanyShares.sol` file:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CompanyShares {
  uint256 public totalShares;

  constructor(uint256 initialShares) {
    totalShares = initialShares;
  }

  function buyShares(uint256 _amount) public {
    // your code goes here...
  }

  function sellShares(uint256 _amount) public {
    // your code goes here...
  }
}

```

2. The variable named `totalShares` will store the total number of shares in the company. The variable is of type `uint256` and it is `public`.

3. Add a function called `buyShares` that will allow you to buy shares. The function should receive an `uint256` parameter called `_amount` and it should be `public`. The function should add `_amount` to the `totalShares` variable.

4. Add a function called `sellShares` that will allow you to sell shares. The function should receive an `uint256` parameter called `_amount` and it should be `public`. The function should subtract `_amount` from the `totalShares` variable.

## Remember

- _Run test manually by executing on a terminal: `npx hardhat test test/07.test.ts`_
