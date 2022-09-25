# `13` Events

In this exercise you will learn how to use events.

Ethereum Events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.

Events are declared using the `event` keyword:

```solidity
event <EventName>(<type> [indexed] <paramName>[, ...]);
```

- `EventName` describes the name of the event.
- `type` is the type of the event parameter.
- `paramName` is the name of the event parameter.

The `indexed` keyword is used to allow the event to be filtered by the value of the argument. This is useful if you want to filter events by the `from` address for example.

Events are emitted using the `emit` keyword:

```solidity
emit <EventName>(<paramValue>[, ...]);
```

Ex:

```solidity
event Deposit(address indexed from, uint256 amount);

function deposit() public payable {
  emit Deposit(msg.sender, msg.value);
}
```

Lets put this into practice by creating an event that will be emitted when a user deposits Ether into the contract.

We been reusing the `EtherBank` contract on previous exercises. Why not create a new contract called `Fundraiser` that will allow users to deposit Ether into the contract, and emit an event when they do so. Also add a function that will allow the owner of the contract to withdraw Ether from the contract.

The contract is:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Fundraiser {
  address private owner;
  uint256 private goal;

  // your code here

  constructor(uint256 _goal) {
    owner = msg.sender;
    goal = _goal;
  }

  function deposit() public payable {
    require(msg.value > 0);
    // your code here
  }

  function withdraw() public {
    require(msg.sender == owner);
    uint256 amount = address(this).balance;
    (bool success, ) = msg.sender.call{ value: amount }("");
    require(success);
    // your code here
  }

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  function getGoal() public view returns (uint256) {
    return goal;
  }
}

```

This simplistic fundraiser contract allows anybody to send Ether to the contract, and the owner to withdraw the Ether from the contract.

## Instructions

1. Create an event called `Deposit` that will be emitted when a user deposits Ether into the contract. The event should have two parameters:

   - `from` of type `address` and `indexed`
   - `amount` of type `uint256`

2. Create an event called `Withdraw` that will be emitted when the owner withdraws Ether from the contract. The event should not have any parameters.

3. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/13.test.ts
```
