# `12` Modifiers

Modifiers are a way to modify the behavior of a function. They are used to check for certain conditions before executing a function. If the condition is not met, the function will not be executed.

Why would we want to do this? Well, we can use modifiers to make sure that only the owner of a smart contract can execute certain functions. This is a very common pattern in smart contracts. Or to protect a function from being executed more than once resulting in a re-entrancy attack.

## Re-entrancy attack

Re Entrancy is a vulnerability that occurs when a contract calls itself or another contract that calls it back before the original call finishes. This can be used to steal Ether from a contract.

If you where not careful the contract from your previous exercise could be vulnerable to re entrancy. Lets see how we can fix it with a modifier.

Add this to your `EtherBank` contract:

```solidity
bool private locked = false;

modifier reentrancyGuard() {
  require(!locked, "re-entrancy");
  locked = true;
  _;
  locked = false;
}
```

With this in place we can now add a `reentrancyGuard` modifier to the `withdraw` function:

```solidity
function withdraw(uint256 amount) public reentrancyGuard {
  // your withdraw code.
}

```

## Instructions

1. Compile the code by clicking on the "Test" button above.

2. Move to next exercise to learn how to fix the vulnerability.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/12.test.ts
```
