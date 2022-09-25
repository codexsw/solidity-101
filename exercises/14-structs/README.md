# `14` Structs

In Solidity, structs are a way to create a custom data type that can be used to group multiple variables of different data types into a single unit. Structs are similar to tuples in other languages.

To declare a struct, you use the `struct` keyword followed by the name of the struct and the data types of the variables that will be grouped together. For example:

```solidity
struct <StructName> {
  <type> <paramName>;
  ...
}
```

Ex:

```solidity
struct Person {
  string name;
  uint256 age;
}

```

To create a variable of a struct type, you use the name of the struct followed by the name of the variable. For example:

```solidity
<StructName> <variableName>;
```

Ex:

```solidity
Person person;
```

to assign values to the variables of a struct, you use the dot operator followed by the name of the variable. For example:

```solidity
<variableName>.<paramName> = <value>;
```

Ex:

```solidity
person.name = "John";
person.age = 30;
```

To create a variable of a struct type and assign values to the variables of the struct at the same time, you use the following syntax:

```solidity
<StructName> <variableName> = <StructName>({
  <paramName>: <value>,
  ...
});
```

Ex:

```solidity
Person person = Person({
  name: "John",
  age: 30
});
```

To access the variables of a struct, you use the dot operator followed by the name of the variable. For example:

```solidity
<variableName>.<variableName>;
```

Ex:

```solidity
person.name;
```

New contract? lets go for it. This time lets create a `Whitelist` contract that will allow the owner of the contract to add and remove addresses from a whitelist. The contract should also have a function that will allow anyone to check if an address is whitelisted or not.

We also want to store per address:

- Amount of tokens that the address will be allowed to mint
- How many tokens the address has minted

## Instructions

Create a `constracts/Whitelist.sol` file and add the following code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Whitelist {
  address private owner;

  // your code here

  constructor() {
    owner = msg.sender;
  }

  function add(address _address, uint256 maxMint) public {
    require(msg.sender == owner);
    // your code here
  }

  function remove(address _address) public {
    require(msg.sender == owner);
    // your code here
  }

  function isWhitelisted(address _address) public view returns (bool) {
    // your code here
  }

  function getMaxMint(address _address) public view returns (uint256) {
    // your code here
  }

  function getMinted(address _address) public view returns (uint256) {
    // your code here
  }
}

```

1. Create a struct called `WhitelistEntry` that will have the following variables:

- `uint256` called `maxMintAmount`
- `uint256` called `mintedAmount`

2. Create a mapping called `whitelist` that will map an `address` to a `WhitelistEntry`.

3. Complete the functions:

   - `add` should add an address to the whitelist and set the `maxMintAmount` to the value passed as a parameter.
   - `remove` should remove an address from the whitelist.
   - `isWhitelisted` should return `true` if the address is whitelisted and `false` otherwise.
   - `getMaxMint` should return the `maxMintAmount` for the address passed as a parameter.
   - `getMinted` should return the `mintedAmount` for the address passed as a parameter.

4. Compile the code by clicking on the "Test" button above.

## Remember

- _Try to implement the `isWhitelisted` function first since most tests depend on it._

- _To check existence on a Solidity mapping try to check if one property has a value different than 0._

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/14.test.ts
```
