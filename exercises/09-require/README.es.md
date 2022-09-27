# `09` require

`require` es una función que le permite realizar aserciones en el código que está ejecutando. Si la afirmación es verdadera, el código continuará ejecutándose. Si la afirmación es falsa, el código dejará de ejecutarse y la transacción se revertirá.

```solidity
require(condition, ["message"]);
```

_(Lamentablemente, los contratos inteligentes de Ethereum están limitados en el tamaño de compilación final, así que intente incluir solo las comprobaciones requeridas necesarias, ya que todavía son código y su ejecución cuesta bytes y gas.)_

Modifiquemos aún más nuestro contrato inteligente `CompanyStock` para agregar una nueva función llamada `transferStock` que nos permitirá transferir acciones a un comprador. La función recibirá la cantidad de stock a transferir y las direcciones de origen y destino.

## Instrucciones

1. Reutilizar el contrato `CompanyStock` del ejercicio anterior..

2. Agrega una función llamada `transferStock` que recibirá la cantidad de stock a transferir, la dirección de origen y la dirección de destino. La función debe ser `public` .

```solidity
function transferStock(
  uint256 amount,
  address source,
  address destination
) public {
  // su código va aquí...
}

```

3. Agregue una instrucción `require` para verificar que la cantidad de acciones a transferir sea mayor que 0..

4. Agregue una declaración `require` para verificar que la dirección de origen tenga suficiente stock para transferir.

5. Agregue una declaración `require` para verificar que la dirección de origen no sea la misma que la dirección de destino.

## Recuerda

- _UUtilice la función `require` para realizar aserciones en el código que está ejecutando._
- _Utilice el operador `>` para comprobar si un número es mayor que otro._
- _Utilice el operador `!=` para comprobar si dos valores no son iguales._
- _No es necesario pasar un mensaje a la función `require`. Para este ejercicio, no pase un parámetro de mensaje._

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/09.test.ts
```
