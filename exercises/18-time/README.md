# `18` Time

Solidity has a `block` object that contains information about the current block. The `block.timestamp` property contains the timestamp of the current block in seconds since the Unix epoch.

```solidity
block.timestamp;
```

_(On older smart contracts you can also find `now` which is an alias for `block.timestamp`.)_

The `block.timestamp` property is useful to get the current time. For example, we can use it to create a function that will allow us to check if a certain amount of time has passed.

```solidity
pragma solidity ^0.5.0;

contract Time {
  uint256 public lastUpdated;

  function update() public {
    lastUpdated = block.timestamp;
  }

  function hasPassed(uint256 secondsToPass) public view returns (bool) {
    return block.timestamp >= lastUpdated + secondsToPass;
  }
}

```

In the example above we have a `Time` smart contract that will store the timestamp of the last time the `update` function was called. The `hasPassed` function will allow us to check if a certain amount of time has passed since the last time the `update` function was called.

Lets use this new adquired knowledge to create a smart contract that will allow us to lock ether in a smart contract for a certain amount of time.

## Instructions

1. Create a contract called `Locked` and copy the following code into it:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Locked {
  uint256 private unlockTime;
  address payable private owner;

  constructor(uint256 _secondsToUnlock) payable {
    require(msg.value > 0);
    unlockTime = block.timestamp + _secondsToUnlock;
    owner = payable(msg.sender);
  }

  function withdraw() public {
    // your code here

    owner.transfer(address(this).balance);
  }

  function timeRemaining() public view returns (uint256) {
    // your code here
  }
}

```

2. Complete the `withdraw` function so that it will only allow the owner of the contract to withdraw the ether if the `unlockTime` has passed.

3. Create the `timeRemaining` function. The `timeRemaining` function should return the amount of time remaining until the `unlockTime`.

4. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/18.test.ts
```
