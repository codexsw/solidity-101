# `19` Herencia

La herencia es una forma de crear un nuevo contrato a partir de un contrato existente. El nuevo contrato heredará todas las variables de estado y funciones del contrato principal. La herencia es útil cuando desea crear un nuevo contrato que tenga las mismas variables de estado y funciones que otro contrato, pero desea agregar alguna funcionalidad nueva.

Solidity admite herencia única, herencia múltiple y herencia jerárquica.

La herencia única es cuando un contrato hereda de un solo contrato. Por ejemplo, `Car` hereda de `Vehicle`

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

La herencia múltiple es cuando un contrato hereda de múltiples contratos. Por ejemplo, `Car` hereda de `Vehicle` y `Engine`

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

La herencia jerárquica es cuando un contrato hereda de otro contrato que hereda de otro contrato. Por ejemplo, `Car` hereda de `Vehicle` y `Vehicle` hereda de `Engine`

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

## Sobreescribiendo funciones

Cuando un contrato se hereda de otro contrato, puede anular las funciones del contrato principal. Para anular una función, debe utilizar la palabra clave `override` . Por ejemplo, `Car` hereda de `Vehicle` y anula la función `setSpeed`

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

## Llamando a funciones del contrato padre

Cuando un contrato hereda de otro contrato, puede llamar a las funciones del contrato principal. Para llamar a una función principal, debe usar la palabra clave `super` . Por ejemplo, `Car` hereda de `Vehicle` y llama a la función `setSpeed`

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

## Visibilidad

Cuando un contrato se hereda de otro contrato, se puede cambiar la visibilidad de las funciones del contrato principal. Por ejemplo, `Car` hereda de `Vehicle` y cambia la visibilidad de la función `setSpeed` de `public` a `internal`:

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

## Contratos abstractos

Un contrato abstracto es un contrato que tiene una o más funciones abstractas. Una función abstracta es una función que no tiene implementación. Los contratos abstractos no se pueden implementar. Solo se pueden heredar de. Por ejemplo, `Vehicle` es un contrato abstracto porque tiene una función abstracta:

```solidity
abstract contract Vehicle {
  uint256 public speed;

  function setSpeed(uint256 _speed) public virtual;
}

```

## Interfaces

Una interfaz es un contrato que tiene una o más funciones abstractas. Una interfaz es similar a un contrato abstracto, pero no puede tener variables de estado o funciones con una implementación. Las interfaces se utilizan para definir la estructura de un contrato. Por ejemplo, `Vehicle` es una interfaz

```solidity
interface Vehicle {
  function setSpeed(uint256 _speed) external;
}

```

## Importación de contratos

Puede importar contratos desde otros archivos. Por ejemplo, `Car` importa `Vehicle` desde otro archivo:

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

OpenZeppelin es una biblioteca de contratos inteligentes reutilizables. Puede usar OpenZeppelin para crear sus propios contratos inteligentes. Por ejemplo, `Car` hereda de `ERC721` de OpenZeppelin:

```solidity
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Car is ERC721 {
  function setSpeed(uint256 _speed) public {
    speed = _speed;
  }
}

```

OpenZeppelin es probablemente la biblioteca más popular de contratos inteligentes, los contratos de OpenZeppelin se prueban y auditan exhaustivamente. Es utilizado por muchos proyectos, incluidos Uniswap, Compound y Aave. Incluye muchos contratos útiles, como ERC20, ERC721 y ERC1155. y funciones de seguridad, como Ownable, Pausable y ReentrancyGuard.

Intentemos crear un nuevo contrato que herede de otro contrato, para esto usaremos el contrato ERC20 de OpenZeppelin.

Un contrato ERC20 es un contrato que implementa el estándar ERC20. El estándar ERC20 es un estándar para crear tokens. El estándar ERC20 define las funciones que debe tener un contrato de token. Por ejemplo, la función `transfer` transfiere tokens de una cuenta a otra. La función `balanceOf` devuelve el saldo de una cuenta. La función `approve` aprueba una cuenta para gastar tokens en nombre de otra cuenta. La función `allowance` devuelve la cantidad de tokens que una cuenta puede gastar en nombre de otra cuenta.

## Instrucciones

1. Cree un nuevo archivo llamado `contracts/Token.sol`.

2. Importe el contrato ERC20 de OpenZeppelin.

3. Cree un nuevo contrato llamado `Token` que herede del contrato ERC20.

4. Agregue la función `constructor`.

5. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- OpenZeppelin tiene un asistente increíble que lo ayuda a crear contratos inteligentes. Puede utilizar el Asistente para crear sus propios contratos inteligentes. Por ejemplo, puede utilizar el asistente para crear un contrato ERC20. Vaya a https://wizard.openzeppelin.com/. Generar un nuevo proyecto. Seleccione el contrato ERC20. Descarga el proyecto. Copie el código en el archivo `contracts/Token.sol` _(Agregue tokens predeterminados para que el implementador del contrato obtenga esos tokens)_

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/19.test.ts
```
