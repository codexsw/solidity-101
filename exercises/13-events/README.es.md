# `13` Eventos

En este ejercicio aprenderá a utilizar eventos.

Los eventos de Ethereum son una forma en que su contrato comunica que algo sucedió en la cadena de bloques al front-end de su aplicación, que puede estar "escuchando" ciertos eventos y tomar medidas cuando suceden.

Los eventos se declaran utilizando la palabra clave `event`:

```solidity
event <EventName>(<type> [indexed] <paramName>[, ...]);
```

- `EventName` describe el nombre del evento.
- `type` es el tipo del parámetro de evento.
- `paramName` es el nombre del parámetro de evento.

La palabra clave `indexed` se usa para permitir que el evento se filtre por el valor del argumento. Esto es útil si desea filtrar eventos por la dirección de origen, por ejemplo

Los eventos se emiten usando la palabra clave `emit`:

```solidity
emit <EventName>(<paramValue>[, ...]);
```

Ex:

```solidity
event Deposit(address indexed from, uint256 amount);

function deposit() public payable {
  emit Deposit(msg.sender, msg.value);
}
```

Pongamos esto en práctica creando un evento que se emitirá cuando un usuario deposite Ether en el contrato

Hemos estado reutilizando el contrato de `EtherBank` en ejercicios anteriores. ¿Por qué no crear un nuevo contrato llamado `Fundraiser` que permitirá a los usuarios depositar Ether en el contrato y emitir un evento cuando lo hagan? También agregue una función que permitirá al propietario del contrato retirar Ether del contrato

El contrato es:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Fundraiser {
  address private owner;
  uint256 private goal;

  // tu código aquí

  constructor(uint256 _goal) {
    owner = msg.sender;
    goal = _goal;
  }

  function deposit() public payable {
    require(msg.value > 0);
    // your code here
  }

  function withdraw() public {
    require(msg.sender == owner);
    uint256 amount = address(this).balance;
    (bool success, ) = msg.sender.call{ value: amount }("");
    require(success);
    //tu código aquí
  }

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  function getGoal() public view returns (uint256) {
    return goal;
  }
}

```

Este contrato de recaudación de fondos simplista permite que cualquier persona envíe Ether al contrato y que el propietario retire el Ether del contrato.

## Instrucciones

1. Cree un evento llamado `Deposit` que se emitirá cuando un usuario deposite Ether en el contrato. El evento debe tener dos parámetros:

   - `from` tipo `address` e `indexed`
   - `amount` de tipo `uint256`

2. Cree un evento llamado `Withdraw` que se emitirá cuando el propietario retire Ether del contrato. El evento no debe tener ningún parámetro.

3. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/13.test.ts
```
