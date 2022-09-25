# `11` payables

Payables are a special type of contract that can receive Ether. In this exercise, you will learn how to send Ether to a contract and how to withdraw Ether from a contract.

When we want to receive Ether in a contract, we need to mark the transaction function as `payable`. This will allow the contract to receive Ether when the function is called.

```solidity
function deposit() public payable {
  // your code goes here...
}

```

Any function in Solidity with the modifier `payable` ensures that the function can receive Ether. It can process transactions with non-zero Ether values and rejects any transactions with a zero Ether value. Additionally, if you want a function to process transactions and have not included the payable keyword in them the transaction will be automatically rejected.

Lets create a Smart Contract that will allow us to send and receive Ether.

## Instructions

1. Create a new contract called `contracts/EtherBank.sol`.

2. Add a function called `deposit` that will allow us to send Ether to the contract. This function should be marked as `payable`. This function should also check that the amount of Ether sent is greater than 0, and keep track of balances, via a mapping called `balances` that will store the amount of Ether that every address has sent to the contract.

```solidity
function deposit() public payable {
  // msg.sender sents Ether to the contract
}

```

3. Add a `getBalances` function that will return the Ether balance of the account sending the transaction. (getting it from the balances mapping)

```solidity
function getBalances() public view returns (uint256) {
  // your code goes here...
}

```

4. Add a function called `withdraw` that will allow us to retrieve Ether from the contract. This function should transfer the amount of Ether specified in the `amount` parameter to the address specified in the `msg.sender` property. We want to protect this transaction with a `require` check that returns **"low-balance"** in the case that the account sending the transaction does not have enough Ether to send according to the `balances` mapping.

```solidity
function withdraw(uint256 amount) public {
  // your code goes here...
  // send ether to msg.sender (only if balance allows it)
  // (bool success, ) = msg.sender.call{ value: amount }(""); <-- this is how you send Ether
  // require(success);
}

```

_(`msg.sender` is the address of the person who called the function)_

5. Compile the code by clicking on the "Test" button above.

## Remember

- _1 Ether = 1,000,000,000,000,000,000 Wei. Technically our balances will be stored in Wei._

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/11.test.ts
```
