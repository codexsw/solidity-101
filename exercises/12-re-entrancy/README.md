# `12` Re Entrancy

Re Entrancy is a vulnerability that occurs when a contract calls itself or another contract that calls it back before the original call finishes. This can be used to steal Ether from a contract.

If you where not careful the contract from your previous exercise could be vulnerable to re entrancy. Lets see how we can fix it.

The test for this exercise will try to steal Ether from the contract. If you are able to fix the vulnerability the test will pass.

Run the test now. It should pass, which means that the contract is vulnerable to re entrancy.

If it fails, most probably your contract is not vulnerable to re entrancy.

## Instructions

1. Compile the code by clicking on the "Test" button above.

2. Move to next exercise to learn how to fix the vulnerability.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/12.test.ts
```
