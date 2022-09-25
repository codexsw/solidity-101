# `11` payables

Payables are a special type of contract that can receive Ether. In this exercise, you will learn how to send Ether to a contract and how to withdraw Ether from a contract.

When we want to receive Ether in a contract, we need to mark the function as `payable`. This will allow the contract to receive Ether when the function is called.

```solidity
function deposit() public payable {
  // your code goes here...
}

function send() public payable {
  // your code goes here...
}

```

Any function in Solidity with the modifier `payable` ensures that the function can send and receive Ether. It can process transactions with non-zero Ether values and rejects any transactions with a zero Ether value. Additionally, if you want a function to process transactions and have not included the payable keyword in them the transaction will be automatically rejected.

Lets create a Smart Contract that will allow us to send and receive Ether.

## Instructions

1. Create a new contract called `contracts/EtherBank.sol`.

2. Add a function called `deposit` that will allow us to send Ether to the contract. This function should be marked as `payable`.

```solidity
function deposit() public payable {
  // msg.sender sents Ether to the contract
}

```

3. Contract should keep track of the amount of Ether that every address has sent to the contract. Add a mapping called `balances` that will store the amount of Ether that every address has sent to the contract.

4. Add a function called `withdraw` that will allow us to send Ether to another address. This function should be marked as `payable` and should send the amount of Ether specified in the `amount` parameter to the address specified in the `msg.sender` property.

```solidity
function withdraw(uint256 amount) public payable {
  // your code goes here...
  // send ether to msg.sender (only if balance allows it)
}

```

_(`msg.sender` is the address of the person who called the function)_

2. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/10.test.ts
```
