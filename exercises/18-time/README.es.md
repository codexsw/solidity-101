# `18` Time

Solidity tiene un objeto `bloque` que contiene información sobre el bloque actual. La propiedad `block.timestamp` contiene la marca de tiempo del bloque actual en segundos desde la epoc de Unix

```solidity
block.timestamp;
```

_(En contratos inteligentes más antiguos, también puede encontrar `now` que es un alias para `block.timestamp`)_

La propiedad `block.timestamp` es útil para obtener la hora actual. Por ejemplo, podemos usarlo para crear una función que nos permita verificar si ha pasado una cierta cantidad de tiempo.

```solidity
pragma solidity ^0.5.0;

contract Time {
  uint256 public lastUpdated;

  function update() public {
    lastUpdated = block.timestamp;
  }

  function hasPassed(uint256 secondsToPass) public view returns (bool) {
    return block.timestamp >= lastUpdated + secondsToPass;
  }
}

```

En el ejemplo anterior, tenemos un contrato inteligente `Time` que almacenará la marca de tiempo de la última vez que se llamó a la función `update` . La función `hasPassed` nos permitirá comprobar si ha pasado una cierta cantidad de tiempo desde la última vez que se llamó a la función `update` .

Usemos este nuevo conocimiento adquirido para crear un contrato inteligente que nos permitirá bloquear ether en un contrato inteligente durante un cierto período de tiempo.

## Instrucciones

1. Cree un contrato llamado `Locked` y copie el siguiente código en él:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Locked {
  uint256 private unlockTime;
  address payable private owner;

  constructor(uint256 _secondsToUnlock) payable {
    require(msg.value > 0);
    unlockTime = block.timestamp + _secondsToUnlock;
    owner = payable(msg.sender);
  }

  function withdraw() public {
    // su código aquí

    owner.transfer(address(this).balance);
  }

  function timeRemaining() public view returns (uint256) {
    // su código aquí
  }
}

```

2. Complete la función `withdraw` para que solo le permita al propietario del contrato retirar el éter si ha pasado el tiempo de desbloqueo `unlockTime`.

3. Cree la función `timeRemaining` . La función `timeRemaining` debería devolver la cantidad de tiempo restante hasta el `unlockTime`.

4. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/18.test.ts
```
