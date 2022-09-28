# `15` Enums

Las `enum` o enumeraciones son un tipo especial de clase que representa un grupo de constantes (variables inmutables, como las variables finales en Java). Se utilizan cuando tenemos un conjunto fijo de valores, como las direcciones de la brújula (`NORTH`, `SOUTH`, `EAST`, and `WEST`).

Para declarar una enumeración, utiliza la palabra clave `enum` seguida del nombre de la enumeración y los valores de la enumeración. Por ejemplo:

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

Para crear una variable de un tipo de enumeración, utilice el nombre de la enumeración seguido del nombre de la variable. Por ejemplo:

```solidity
<EnumName> <variableName>;
```

Ex:

```solidity
CompassDirection direction;
```

Para asignar un valor a una variable de enumeración, utilice el operador igual seguido del nombre del valor. Por ejemplo:

```solidity
<variableName> = <EnumName>.<value>;
```

Ex:

```solidity
direction = CompassDirection.NORTH;
```

Las enumeraciones son particularmente útiles cuando queremos limitar los valores posibles de una variable. Por ejemplo, podemos usar una enumeración para representar el estado de una transacción:

```solidity
enum TransactionStatus {
  PENDING,
  SUCCESS,
  FAILED
}

```

o el estado de un préstamo:

```solidity
enum LoanStatus {
  PENDING,
  APPROVED,
  DENIED
}

```

Esta vez crearemos un contrato inteligente de `Insurance` que almacenará el estado de una póliza de seguro. El estado de una póliza de seguro puede ser uno de los siguientes:

- `QUOTE`
- `BOUND`
- `ISSUED`
- `CANCELLED`
- `EXPIRED`

El contrato tiene funciones que permitirán cambiar el estado de la póliza de seguro. El contrato también debe tener una función que permita a cualquier persona comprobar el estado de la póliza de seguro.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Insurance {
  // su código aquí

  PolicyStatus private status;

  function changeStatus(PolicyStatus _status) public {
    status = _status;
  }

  function getStatus() public view returns (PolicyStatus) {
    return status;
  }

  function isActive() public view returns (bool) {
    // su código aquí
  }

  function notActive() public view returns (bool) {
    // su código aquí
  }
}

```

## Instrucciones

1. Cree un archivo `contracts/Insurance.sol` y agregue el código anterior.

2. Cree una enumeración `PolicyStatus` con los siguientes valores: `QUOTE`, `BOUND`, `ISSUED`, `CANCELLED`, `EXPIRED`.

3. Cree una función `isActive` que devolverá `true` si el estado de la política es `BOUND` o `ISSUED`. De lo contrario, debería devolver `false`.

4. Cree una función `notActive` que devolverá verdadero si el estado de la política es `CANCELLED` o `EXPIRED`. De lo contrario, debería devolver `false`.

5. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/15.test.ts
```
