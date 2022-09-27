# `04` Datos en contratos inteligentes

Modifiquemos nuestro contrato inteligente `NumberStorage` para almacenar un par de números. También agregaremos una función que devuelva la suma de los dos números.

## Instrucciones

1. Cree un contrato inteligente contracts/NumberStorage04 para almacenar dos números. El primer número debe almacenarse en una variable llamada `number1` y el segundo número debe almacenarse en una variable llamada `number2`.

2. Agregue 2 funciones llamadas `setNumber1` y `setNumber2` que le permitirán establecer el valor de `number1` y `number2` respectivamente.

```solidity
function setNumber1(uint256 _number) public {
  // tu código va aquí...
}

```

3. Agregue una función llamada `getSum` que devuelva la suma de los dos números

```solidity
function getSum() public view returns (uint256) {
  // tu código va aquí...
}

```

4. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Utilice la palabra clave `public` para que las variables y la función sean accesibles desde fuera del contrato inteligente._

- _UUsa el operador `+` para sumar dos números._

- _Utilice el operador `=` para asignar un valor a una variable._

- _Utilice la palabra clave `return` para devolver un valor de una función._

- _La única forma de almacenar datos en un contrato inteligente es mediante el uso de variables._

- _La única forma de modificar una variable es usando una función. Estas funciones se llaman en las transacciones._

- _Run test manually by executing on a terminal:_

```shell
npx hardhat test test/04.test.ts
```
