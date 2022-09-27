# `03` Segundo contrato inteligente

Hagamos ahora un segundo contrato inteligente. Esta vez haremos un contrato inteligente que almacene un número y lo devuelva.

Los contratos inteligentes pueden almacenar datos en una variable. Una variable es un dato que se almacena en la memoria del contrato inteligente. En este caso, almacenaremos un número en una variable llamada `number` .

## Tipos de datos de Solidity

Solidity es un lenguaje de tipo estático, lo que significa que el tipo de cada variable (estado y local) debe especificarse en el momento de la compilación. El compilador puede deducir el tipo de datos de un literal entero. Por ejemplo, el tipo de 15 es `uint8` (entero sin signo de 8 bits). El tipo del literal 42 es `uint256` (entero sin signo de 256 bits).

La siguiente tabla muestra los diferentes tipos de datos disponibles en Solidity:

| Data Type             | Description                                      |
| --------------------- | ------------------------------------------------ |
| `bool`                | Valor booleano, ya sea `true` o `false`          |
| `uint`                | Entero sin signo de 256 bits                     |
| `int`                 | Entero con signo de 256 bits                     |
| `address`             | Tipo de dirección de Ethereum                    |
| `string`              | Tipo de cadena                                   |
| `bytes`               | Matriz de bytes de tamaño dinámico               |
| `bytes1` to `bytes32` | Matriz de bytes de tamaño fijo                   |
| `uint8` to `uint256`  | Enteros sin signo de 8 a 256 bits                |
| `int8` to `int256`    | Enteros con signo de 8 a 256 bits                |
| `uint8[]`             | Matriz dinámica de enteros sin signo de 8 bits   |
| `uint8[3]`            | Matriz estática de 3 enteros sin signo de 8 bits |

## Variables del contrato

Una variable de contrato es una variable que se declara en el contrato. Una variable de contrato se almacena en el almacenamiento del contrato. Las variables del contrato se escriben en la cadena de bloques y son accesibles para otros contratos.

```txt
<type> [modifiers] [visibility] <variableName> [= <initialValue>];
```

Ejemplos

```solidity
uint256 number;
uint256 public number;
uint256 private number = 32;
address public owner;
```

Como puede ver, también puede establecer el valor inicial de una variable de contrato. Esto se hace usando el operador `=`

## Instrucciones

1. Cree un nuevo archivo llamado `contracts/NumberStorage.sol` y agregue el siguiente código:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NumberStorage {
  uint256 public number;

  function setNumber(uint256 _number) public {
    number = _number;
  }
}

```

2. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la pruebas manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/03.test.ts
```
