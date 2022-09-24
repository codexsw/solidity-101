# `03` Second Smart Contract

Lets now make a second smart contract. This time we will make a smart contract that stores a number and returns it.

Smart Contracts can store data in a variable. A variable is a piece of data that is stored in the smart contract's memory. In this case, we will store a number in a variable called `number`.

## Solidity Data Types

Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified at compile time. The compiler can deduce the data type of an integer literal. For example, the type of `15` is `uint8` (unsigned integer of 8 bits). The type of the literal `42` is `uint256` (unsigned integer of 256 bits).

The following table shows the different data types available in Solidity:

| Data Type             | Description                                   |
| --------------------- | --------------------------------------------- |
| `bool`                | Boolean value, either `true` or `false`       |
| `uint`                | Unsigned integer of 256 bits                  |
| `int`                 | Signed integer of 256 bits                    |
| `address`             | Ethereum address type                         |
| `string`              | String type                                   |
| `bytes`               | Dynamically-sized byte array                  |
| `bytes1` to `bytes32` | Fixed-size byte array                         |
| `uint8` to `uint256`  | Unsigned integers of 8 to 256 bits            |
| `int8` to `int256`    | Signed integers of 8 to 256 bits              |
| `uint8[]`             | Dynamic array of unsigned integers of 8 bits  |
| `uint8[3]`            | Static array of 3 unsigned integers of 8 bits |

## Contract Variables

A contract variable is a variable that is declared in the contract. A contract variable is stored in the contract's storage. Contract variables are written to the blockchain and are accessible to other contracts.

```txt
<type> [modifiers] [visibility] <variableName> [= <initialValue>];
```

Examples

```solidity
uint256 number;
uint256 public number;
uint256 private number = 32;
address public owner;
```

As you can see, you can also set the initial value of a contract variable. This is done by using the `=` operator.

## Instructions

1. Create a new file called `contracts/NumberStorage.sol` and add the following code:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NumberStorage {
  uint256 public number;

  function setNumber(uint256 _number) public {
    number = _number;
  }
}

```

2. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal: `npx hardhat test test/03.test.ts`_
