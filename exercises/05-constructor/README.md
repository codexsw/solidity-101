# `05` Constructors

In the previous exercise, we learned how to create a smart contract that stores data. However, we had to manually set the values of the variables, this will result in several transactions with associated costs. In this exercise, we will learn how to set the values of the variables automatically when the smart contract is deployed.

Constructors are special functions that are executed when the smart contract is deployed. They are used to initialize the state of the smart contract. In this exercise, we will use a constructor to set the values of the variables.

```solidity
constructor(type parameter1, ...parameterN) {
    // your initialization code goes here...
}
```

Ex:

```solidity
constructor(uint256 _number) {
  number = _number;
}

```

## Instructions

1. Create a `contracts/NumberStorage05` smart contract to store two numbers. The first number should be stored in a variable called `number1` and the second number should be stored in a variable called `number2`. _Do not create functions to set the values of the variables._

2. Add a constructor that will allow you to set the value of `number1` and `number2` when the smart contract is deployed.

3. The contract will keep the `getSum` function that returns the sum of the two numbers from the previous exercise.

## Remember

- _constructor functions are executed when the smart contract is deployed._

- _constructor functions are used to initialize the state of the smart contract._

- _constructor functions don't have a return type._

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/05.test.ts
```
