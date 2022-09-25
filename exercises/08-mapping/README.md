# `08` mapping

Mapping is a very useful data type in Solidity. It allows you to store data in a key-value format. The key can be any data type and the value can be any data type. The key is used to access the value.

```solidity
mapping(address => uint256) public balances;
```

In the example above, the key is an `address` and the value is a `uint256`. The `balances` variable is a mapping that stores the balance of an address. The `public` keyword makes the variable accessible from outside the smart contract.

_This is usually how tokens are stored in the Ethereum blockchain. The key is the address of the token holder and the value is the balance of the token holder._

## Instructions

Lets modify our `CompanyShares` contract from the previous exercise to store the shares of a company in a mapping. The key will be the address of the shareholder and the value will be the number of shares owned by the shareholder.

1. Create a new `contracts/CompanyStock.sol` contract called `CompanyStock`.

2. Add a mapping called `shares` that will store the number of shares owned by an address.

3. Add a function called `setShares` that will allow you to set the number of shares owned by an address.

```solidity
function setShares(address shareholder, uint256 numberOfShares) public {
  // your code goes here...
}

```

4. Add a function called `getShares` that will allow you to get the number of shares owned by an address.

```solidity
function getShares(address shareholder) public view returns (uint256) {
  // your code goes here...
}

```

5. Add a function called `getTotalShares` that will return the total number of shares owned by all shareholders.

6. Compile the code by clicking on the "Test" button above.

_(The best way to keep track of total shares is to have a contract variable tracking the total supply, this means every time you set the shares of a stockholder via the `setShares` functions you will need to recalculate the total supply)_

## Remember

- _For keeping track of the total supply of a token, you can use a contract variable. Recalculating the total supply could be something like_

```solidity
totalShares = totalShares - shares[stockholder] + newShares;
```

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/08.test.ts
```
