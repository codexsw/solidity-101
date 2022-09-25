# `15` Enums

Enums are a special kind of class that represents a group of constants (unchangeable variables, like `final` variables in Java). They are used when we have a fixed set of values, such as compass directions (values of `NORTH`, `SOUTH`, `EAST`, and `WEST`).

To declare an enum, you use the `enum` keyword followed by the name of the enum and the values of the enum. For example:

```solidity
enum <EnumName> {
  <value>,
  ...
}
```

Ex:

```solidity
enum CompassDirection {
  NORTH,
  SOUTH,
  EAST,
  WEST
}

```

To create a variable of an enum type, you use the name of the enum followed by the name of the variable. For example:

```solidity
<EnumName> <variableName>;
```

Ex:

```solidity
CompassDirection direction;
```

To assign a value to an enum variable, you use the equal operator followed by the name of the value. For example:

```solidity
<variableName> = <EnumName>.<value>;
```

Ex:

```solidity
direction = CompassDirection.NORTH;
```

Enums are particularly useful when we want to limit the possible values of a variable. For example, we can use an enum to represent the status of a transaction:

```solidity
enum TransactionStatus {
  PENDING,
  SUCCESS,
  FAILED
}

```

or the status of a loan:

```solidity
enum LoanStatus {
  PENDING,
  APPROVED,
  DENIED
}

```

This time we will create a `Insurance` smart contract that will store the status of an insurance policy. The status of an insurance policy can be one of the following:

- `QUOTE`
- `BOUND`
- `ISSUED`
- `CANCELLED`
- `EXPIRED`

The contract have functions that will allow to change the status of the insurance policy. The contract should also have a function that will allow anyone to check the status of the insurance policy.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Insurance {
  // your code here

  PolicyStatus private status;

  function changeStatus(PolicyStatus _status) public {
    status = _status;
  }

  function getStatus() public view returns (PolicyStatus) {
    return status;
  }

  function isActive() public view returns (bool) {
    // your code here
  }

  function notActive() public view returns (bool) {
    // your code here
  }
}

```

## Instructions

1. Create a `contracts/Insurance.sol` file and add the code above.

2. Create a `PolicyStatus` enum with the following values: `QUOTE`, `BOUND`, `ISSUED`, `CANCELLED`, `EXPIRED`.

3. Create a `isActive` function that will return `true` if the status of the policy is `BOUND` or `ISSUED`. Otherwise, it should return `false`.

4. Create a `notActive` function that will return `true` if the status of the policy is `CANCELLED` or `EXPIRED`. Otherwise, it should return `false`.

5. Compile the code by clicking on the "Test" button above.

## Remember

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/15.test.ts
```
