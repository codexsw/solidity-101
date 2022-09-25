# `09` require

`require` is a function that allows you to perform assertions on the code that you are executing. If the assertion is true, the code will continue to execute. If the assertion is false, the code will stop executing and the transaction will be reverted.

```solidity
require(condition, 'message');
```

_(Sadly Ethereum Smart Contracts are limited on the final compilation size so try to only include the require checks necessary since they are still code and their execution costs bytes and gas.)_

Lets modify further our `CompanyStock` smart contract to add a new function called `transferStock` that will allow us to transfer stock to a buyer.
The function will receive the amount of stock to transfer and the source and destination addresses.

## Instructions

1. Reuse the `CompanyStock` contract from previous exercise.

2. Add a function called `transferStock` that will receive the amount of stock to transfer, the source address and the destination address. The function should be `public`.

```solidity
function transferStock(
  uint256 amount,
  address source,
  address destination
) public {
  // your code goes here...
}

```

3. Add a `require` statement to check that the amount of stock to transfer is greater than 0.

4. Add a `require` statement to check that the source address has enough stock to transfer.

5. Add a `require` statement to check that the source address is not the same as the destination address.

## Remember

- _For keeping track of the total supply of a token, you can use a contract variable. Recalculating the total supply could be something like_

```solidity
totalShares = totalShares - shares[stockholder] + newShares;
```

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/09.test.ts
```
