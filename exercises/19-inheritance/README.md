# `19` Inheritance

Inheritance is a way to create a new contract from an existing contract. The new contract will inherit all the state variables and functions from the parent contract. Inheritance is useful when you want to create a new contract that has the same state variables and functions as another contract, but you want to add some new functionality.

Solidity supports single inheritance, multiple inheritance, and hierarchical inheritance.

Single inheritance is when a contract inherits from a single contract. For example, `Car` inherits from `Vehicle`:

```solidity
contract Vehicle {
  uint256 public speed;
}

contract Car is Vehicle {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

```

Multiple inheritance is when a contract inherits from multiple contracts. For example, `Car` inherits from `Vehicle` and `Engine`:

```solidity
contract Vehicle {
  uint256 public speed;
}

contract Engine {
  uint256 public rpm;
}

contract Car is Vehicle, Engine {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }

  function setRpm(uint256 _rpm) public {
    rpm = _rpm;
  }
}

```

Hierarchical inheritance is when a contract inherits from another contract that inherits from another contract. For example, `Car` inherits from `Vehicle` and `Vehicle` inherits from `Engine`:

```solidity
contract Engine {
  uint256 public rpm;
}

contract Vehicle is Engine {
  uint256 public speed;
}

contract Car is Vehicle {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }

  function setRpm(uint256 _rpm) public {
    rpm = _rpm;
  }
}

```

## Overriding Functions

When a contract inherits from another contract, it can override the functions of the parent contract. To override a function, you must use the `override` keyword. For example, `Car` inherits from `Vehicle` and overrides the `setSpeed` function:

```solidity
contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

contract Car is Vehicle {
  function setSpeed(uint256 _speed) public override {
    speed = _speed * 2;
  }
}

```

## Calling Parent Functions

When a contract inherits from another contract, it can call the functions of the parent contract. To call a parent function, you must use the `super` keyword. For example, `Car` inherits from `Vehicle` and calls the `setSpeed` function:

```solidity
contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

contract Car is Vehicle {
  function setSpeed(uint256 _speed) public {
    super.setSpeed(_speed);
  }
}

```

## Visibility

When a contract inherits from another contract, the visibility of the functions of the parent contract can be changed. For example, `Car` inherits from `Vehicle` and changes the visibility of the `setSpeed` function from `public` to `internal`:

```solidity
contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

contract Car is Vehicle {
  function setSpeed(uint256 _speed) internal {
    speed = _speed;
  }
}

```

## Abstract Contracts

An abstract contract is a contract that has one or more abstract functions. An abstract function is a function that does not have an implementation. Abstract contracts cannot be deployed. They can only be inherited from. For example, `Vehicle` is an abstract contract because it has an abstract function:

```solidity
abstract contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public virtual;
}

```

## Interfaces

An interface is a contract that has one or more abstract functions. An interface is similar to an abstract contract, but it cannot have any state variables or functions with an implementation. Interfaces are used to define the structure of a contract. For example, `Vehicle` is an interface:

```solidity
interface Vehicle {
  function setSpeed(uint256 _speed) external;
}

```

## Importing Contracts

You can import contracts from other files. For example, `Car` imports `Vehicle` from another file:

```solidity
// Vehicle.sol
contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

// Car.sol
import "./Vehicle.sol";

contract Car is Vehicle {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

```

## OpenZeppelin

OpenZeppelin is a library of reusable smart contracts. You can use OpenZeppelin to create your own smart contracts. For example, `Car` inherits from `ERC721` from OpenZeppelin:

```solidity
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Car is ERC721 {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

```

OpenZeppelin is probably the most popular library of smart contracts, OpenZeppelin contracts are heavily tested and audited. It is used by many projects, including Uniswap, Compound, and Aave. Includes many useful contracts, such as ERC20, ERC721, and ERC1155. and security features, such as Ownable, Pausable, and ReentrancyGuard.

Lets try to create a new contract that inherits from another contract, for this we will use OpenZeppelin's ERC20 contract.

An ERC20 contract is a contract that implements the ERC20 standard. The ERC20 standard is a standard for creating tokens. The ERC20 standard defines the functions that a token contract must have. For example, the `transfer` function transfers tokens from one account to another. The `balanceOf` function returns the balance of an account. The `approve` function approves an account to spend tokens on behalf of another account. The `allowance` function returns the amount of tokens that an account is allowed to spend on behalf of another account.

## Instructions

1. Create a new file called `contracts/Token.sol`.

2. Import the ERC20 contract from OpenZeppelin.

3. Create a new contract called `Token` that inherits from the ERC20 contract.

4. Add the `constructor` function.

5. Compile the code by clicking on the "Test" button above.

## Remember

- OpenZeppelin has an amazing Wizard that helps you create smart contracts. You can use the Wizard to create your own smart contracts. For example, you can use the Wizard to create an ERC20 contract. Go to https://wizard.openzeppelin.com/. Generate a new project. Select the ERC20 contract. Download the project. Copy the code on the `contracts/Token.sol` file. Compile the code by clicking on the "Test" button above. _(Add preminted tokens so the deployer of the contract gets awarded those tokens)_

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/19.test.ts
```
