# `11` payables

`Payables` son un tipo especial de contrato que puede recibir Ether. En este ejercicio, aprenderá cómo enviar Ether a un contrato y cómo retirar Ether de un contrato.

Cuando queremos recibir Ether en un contrato, debemos marcar la función de transacción como `payable` . Esto permitirá que el contrato reciba Ether cuando se llame a la función.

```solidity
function deposit() public payable {
  // su código va aquí...
}

```

Cualquier función en Solidity con el modificador `payable` asegura que la función pueda recibir Ether. Puede procesar transacciones con valores Ether distintos de cero y rechaza cualquier transacción con un valor Ether cero. Además, si desea una función para procesar transacciones y no ha incluido la palabra clave pagable en ellas, la transacción se rechazará automáticamente.

Creemos un contrato inteligente que nos permitirá enviar y recibir Ether.

## Instrucciones

1. Cree un nuevo contrato llamado `contracts/EtherBank.sol`.

2. Agrega una función llamada `deposit` que nos permitirá enviar Ether al contrato. Esta función debe marcarse como `payable`. Esta función también debe verificar que la cantidad de Ether enviado sea mayor a 0 y realizar un seguimiento de los saldos, a través de un mapeo llamado `balances` que almacenará la cantidad de Ether que cada dirección ha enviado al contrato

```solidity
function deposit() public payable {
  // msg.sender envía Ether al contrato
}

```

3. Agregue una función `getBalances` que devolverá el saldo de Ether de la cuenta que envía la transacción. (obteniéndolo del mapeo de saldos)

```solidity
function getBalances() public view returns (uint256) {
  // su código va aquí...
}

```

4. Agregue una función llamada `withdraw` que nos permitirá recuperar Ether del contrato. Esta función debe transferir la cantidad de Ether especificada en el parámetro de cantidad a la dirección especificada en la propiedad `msg.sender`. Queremos proteger esta transacción con un chequeo `reuire` que devuelve **low-balance** en el caso de que la cuenta que envía la transacción no tenga suficiente Ether para enviar de acuerdo con el mapeo de saldos `balances`

```solidity
function withdraw(uint256 amount) public {
  // su código va aquí...
  // envía ether a msg.sender (solo si el saldo lo permite)
  // (bool success, ) = msg.sender.call{ value: amount }(""); // <-- así es como envías Ether
  // require(success);
}

```

_(`msg.sender` es la dirección de la persona que llamó a la función)_

5. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _1 Éter = 1,000,000,000,000,000,000 Wei. Técnicamente, nuestros saldos se almacenarán en Wei._

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/11.test.ts
```
