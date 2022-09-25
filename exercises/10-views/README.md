# `10` views

Views are functions that don't modify the state of the smart contract. They are used to read data from the smart contract.
They are executed in a call and not in a transaction, so they don't cost gas, since they are executed locally.

Views are said to be `pure` if they don't read any data from the smart contract. They are said to be `view` if they read data from the smart contract.

Ex: View

```solidity
function getSum() public view returns (uint256) {
  return number1 + number2;
}

```

Ex: Pure

```solidity
function getNumber1() public pure returns (uint256) {
  return 1;
}

```

`view` and `pure` functions are used more as a safety measure. They are used to make sure that the function doesn't modify the state of the smart contract.

## Instructions

1. On the `CompanyStock` smart contract, add a function called `getSharePct` that returns the stock share percentage of an address. (integer aproximation of the stock share)

To calculate the integer approximation of the stock share use this formula:

```solidity
(shares[address] * 100) / totalShares
```

2. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/10.test.ts
```
