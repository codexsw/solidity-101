# `07` Transacciones

Las transacciones son la única forma de modificar datos en un contrato inteligente. Además, las transacciones pueden recibir o enviar Ether. Dado que modifican datos en el contrato inteligente, se ejecutan cuando se envían a la cadena de bloques.

Las transacciones se ejecutan en el orden en que se envían a la cadena de bloques. Si una transacción modifica datos en el contrato inteligente, los nuevos datos estarán disponibles para la siguiente transacción.

## Instrucciones

1. Copie el siguiente código en el archivo `contracts/CompanyShares.sol`:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CompanyShares {
  uint256 public totalShares;

  constructor(uint256 initialShares) {
    totalShares = initialShares;
  }

  function buyShares(uint256 _amount) public {
    // su código va aquí...
  }

  function sellShares(uint256 _amount) public {
    // su código va aquí...
  }
}

```

2. La variable denominada `totalShares` almacenará el número total de acciones de la empresa. La variable es de tipo `uint256` y es `public`.

3. Agregue una función llamada `buyShares` que le permitirá comprar acciones. La función debería recibir un parámetro `uint256` llamado `_amount` y debería ser `public` . La función debe agregar `_amount` a la variable `totalShares`.

4. Agregue una función llamada `sellShares` que le permitirá vender acciones. La función debería recibir un parámetro `uint256` llamado `_amount` y debería ser `public` . La función debe restar `_amount` de la variable `totalShares`.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/07.test.ts
```
