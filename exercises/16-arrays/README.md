# `16` Arrays

Arrays are a special type of variable. They are used to store multiple values in a single variable.

To declare an array, you use the `type[]` syntax. For example:

```solidity
uint256[] numbers;
```

To initialize an array, you use the following syntax:

```solidity
type[] <variableName> = [<value>, <value>, ...];
```

Ex:

```solidity
uint256[] numbers = [1, 2, 3];
```

To access an array, you use the following syntax:

```solidity
<variableName>[<index>];
```

Ex:

```solidity
numbers[0];
```

To get the length of an array, you use the `length` property. For example:

```solidity
numbers.length;
```

To add a value to the end of an array, you use the `push` method. For example:

```solidity
numbers.push(4);
```

To remove a value from the end of an array, you use the `pop` method. For example:

```solidity
numbers.pop();
```

For loops are used to iterate over arrays. For example:

```solidity
for (uint256 i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}
```

_(Solidity for loops are very similar to the ones on C++ or Java)_

Lets try it out!

This time we will create a FIFO queue contract. A FIFO queue is a queue where the first item added to the queue is the first item removed from the queue (First In, First Out).

The purpose of this contract is to store a list of addresses and allow the owner of the contract to remove the first address from the queue.

## Instructions

1. Create a contract called `FIFOQueue` and copy the following code into it:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FIFOQueue {
  address[] public queue;

  function enqueue(address _address) public {
    // your code here
  }

  function dequeue() public {
    // your code here
  }

  function length() public view returns (uint256) {
    // your code here
  }

  function head() public view returns (address) {
    // your code here
  }

  function moveToEnd() public {
    // your code here
  }
}

```

2. Implement the `enqueue` function. This function should add an address to the end of the queue.

3. Implement the `dequeue` function. This function should remove the first address from the queue. For this you will need to `shift` the array to the left. This can be done by using a for loop, moving each element to the left by one position, and then removing the last element from the array using the `pop` method.

4. Implement the `length` function. This function should return the length of the queue.

5. Implement the `head` function. This function should return the first address in the queue.

6. Implement the `moveToEnd` function. This function should remove the first address from the queue and add it to the end of the queue.

7. Compile the code by clicking on the "Test" button above.

## Remember

- _Implement the `head`, `length` functions first, since most tests depend on them_

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/16.test.ts
```
