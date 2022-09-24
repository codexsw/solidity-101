# `04` Data in Smart Contracts

Lets modify our `NumberStorage` smart contract to store a couple of numbers. We will also add a function that returns the sum of the two numbers.

## Instructions

1. Create a `contracts/NumberStorage04` smart contract to store two numbers. The first number should be stored in a variable called `number1` and the second number should be stored in a variable called `number2`.

2. Add 2 functions called `setNumber1` and `setNumber2` that will allow you to set the value of `number1` and `number2` respectively.

```solidity
function setNumber1(uint256 _number) public {
  // your code goes here...
}

```

3. Add a function called `getSum` that returns the sum of the two numbers.

```solidity
function getSum() public view returns (uint256) {
  // your code goes here...
}

```

4. Compile the code by clicking on the "Test" button above.

## Remember

- _Use the `public` keyword to make the variables and function accessible from outside the smart contract._

- _Use the `+` operator to add two numbers._

- _Use the `=` operator to assign a value to a variable._

- _Use the `return` keyword to return a value from a function._

- _The only way to store data in a smart contract is by using variables._

- _The only way to modify a variable is by using a function. This functions are called in transactions._

- _Run test manually by executing on a terminal: `npx hardhat test test/06.test.ts`_
