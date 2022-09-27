# `08` mapeo (mapping)

El `mapping` es un tipo de datos muy útil en Solidity. Le permite almacenar datos en un formato clave-valor. La clave puede ser cualquier tipo de datos y el valor puede ser cualquier tipo de datos. La clave se utiliza para acceder al valor.

```solidity
mapping(address => uint256) public balances;
```

En el ejemplo anterior, la clave es una `address` y el valor es un `uint256` . La variable `balances` es un mapeo que almacena el saldo de una dirección. La palabra clave `public` hace que la variable sea accesible desde fuera del contrato inteligente

_Por lo general, así es como se almacenan los tokens en la cadena de bloques de Ethereum. La clave es la dirección del titular del token y el valor es el saldo del titular del token._

## Instrucciones

Modifiquemos nuestro contrato `CompanyShares` del ejercicio anterior para almacenar las acciones de una empresa en un mapeo. La clave será la dirección del accionista y el valor será el número de acciones propiedad del accionista.

1. Cree un nuevo contrato `contracts/CompanyStock.sol` llamado `CompanyStock`.

2. Agregue un mapeo llamado `shares` que almacenará la cantidad de acciones que posee una dirección.

3. Agregue una función llamada `setShares` que le permitirá establecer la cantidad de acciones que posee una dirección..

```solidity
function setShares(address shareholder, uint256 numberOfShares) public {
  // su código va aquí...
}

```

4. Agregue una función llamada `getShares` que le permitirá obtener la cantidad de acciones que posee una dirección.

```solidity
function getShares(address shareholder) public view returns (uint256) {
  // su código va aquí...
}

```

5. Agregue una función llamada `getTotalShares` que devolverá el número total de acciones propiedad de todos los accionistas.

6. Compile el código haciendo clic en el botón "Test" de arriba.

_(La mejor manera de realizar un seguimiento de las acciones totales es tener una variable de contrato que rastree el suministro total, esto significa que cada vez que establezca las acciones de un accionista a través de las funciones `setShares` , deberá volver a calcular el suministro total)_

## Recuerda

- _Para realizar un seguimiento del suministro total de un token, puede utilizar una variable de contrato. Recalcular el suministro total podría ser algo como_

```solidity
totalShares = totalShares - shares[stockholder] + newShares;
```

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/08.test.ts
```
