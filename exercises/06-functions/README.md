# `06` Functions

In this exercise you will learn how to create functions.

Functions are the only way to modify data in a smart contract. Also, functions allows you to retrieve data from a smart contract.

Functions can receive parameters and return values.

Functions also have access to the global variables `msg.sender` and `msg.value`. `msg.sender` is the address of the account that called the function. `msg.value` is the amount of Ether sent to the smart contract when the function is called. _(If a function is called without Ether, `msg.value` will be 0.)_

If a function modifies data in the smart contract, it is called a **transaction**. If a function only retrieves data from the smart contract, it is called a **call**.

Transactions are executed when they are sent to the blockchain. Calls are executed locally by the Ethereum client, and they don't require any Ether.

```solidity
function <name> (<parameters>) <visibility> [modifiers] <payable> <returns> {
  // your code goes here...
}
```

Example:

```solidity
function getSum(uint256 number1, uint256 number2)
  public
  view
  returns (uint256)
{
  return number1 + number2;
}

```

```solidity
address private owner;

function setOwner(address _owner) public {
  owner = _owner;
}
```

`getSum` is a function that receives two numbers as parameters, adds them and returns the result. `setOwner` is a function that receives an address as a parameter and assigns it to the variable `owner`.

## Instructions

1. Create a smart contract called `OwnableContract`.

2. Add a public variable called `owner` of type `address`.

3. Set the owner of the smart contract to the address that deployed the smart contract.

4. Add a function called `setOwner` that receives an address as a parameter and assigns it to the variable `owner`.

5. Compile the code by clicking on the "Test" button above.

## Remember

- _Use the `public` keyword to make the variables and function accessible from outside the smart contract._

- _Use the `address` data type to store addresses._

- _Run test manually by executing on a terminal: `npx hardhat test test/06.test.ts`_
