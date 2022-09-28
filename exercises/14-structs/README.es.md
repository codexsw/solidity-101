# `14` Structs

En Solidity, las estructuras son una forma de crear un tipo de datos personalizado que se puede usar para agrupar múltiples variables de diferentes tipos de datos en una sola unidad. Las estructuras son similares a las tuplas en otros idiomas.

Para declarar una estructura, utiliza la palabra clave `struct` seguida del nombre de la estructura y los tipos de datos de las variables que se agruparán. Por ejemplo:

```solidity
struct <StructName> {
  <type> <paramName>;
  ...
}
```

Ex:

```solidity
struct Person {
  string name;
  uint256 age;
}

```

Para crear una variable de un tipo de estructura, utiliza el nombre de la estructura seguido del nombre de la variable. Por ejemplo:

```solidity
<StructName> <variableName>;
```

Ex:

```solidity
Person person;
```

para asignar valores a las variables de una estructura, se utiliza el operador punto seguido del nombre de la variable. Por ejemplo:

```solidity
<variableName>.<paramName> = <value>;
```

Ex:

```solidity
person.name = "John";
person.age = 30;
```

Para crear una variable de un tipo de estructura y asignar valores a las variables de la estructura al mismo tiempo, utilice la siguiente sintaxis:

```solidity
<StructName> <variableName> = <StructName>({
  <paramName>: <value>,
  ...
});
```

Ex:

```solidity
Person person = Person({
  name: "John",
  age: 30
});
```

Para acceder a las variables de una estructura, utiliza el operador punto seguido del nombre de la variable. Por ejemplo:

```solidity
<variableName>.<variableName>;
```

Ex:

```solidity
person.name;
```

¿Nuevo contrato? vamos a por ello. Esta vez vamos a crear un contrato de lista blanca que permitirá al propietario del contrato agregar y eliminar direcciones de una lista blanca. El contrato también debe tener una función que permita a cualquier persona comprobar si una dirección está incluida en la lista blanca o no.

También queremos almacenar por dirección:

- Cantidad de tokens que la dirección podrá acuñar
- Cuántos tokens ha acuñado la dirección

## Instrucciones

Cree un archivo `constracts/Whitelist.sol` y agregue el siguiente código:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Whitelist {
  address private owner;

  // tu código aquí

  constructor() {
    owner = msg.sender;
  }

  function add(address _address, uint256 maxMint) public {
    require(msg.sender == owner);
    // tu código aquí
  }

  function remove(address _address) public {
    require(msg.sender == owner);
    // tu código aquí
  }

  function isWhitelisted(address _address) public view returns (bool) {
    // tu código aquí
  }

  function getMaxMint(address _address) public view returns (uint256) {
    // tu código aquí
  }

  function getMinted(address _address) public view returns (uint256) {
    // tu código aquí
  }
}

```

1. Cree una estructura llamada `WhitelistEntry` que tendrá las siguientes variables:

- `uint256` llamado `maxMintAmount`
- `uint256` llamado `mintedAmount`

2. Cree una asignación llamada `whitelist` que asignará una dirección a `WhitelistEntry` (utilizando `mapping`).

3. Completa las funciones:

   - `add` debe agregar una dirección a la `whitelist` y establecer `maxMintAmount` en el valor pasado como parámetro.
   - `remove` debe eliminar una dirección de `whitelist`.
   - `isWhitelisted` debe devolver `true` si la dirección está en la lista blanca y `false` en caso contrario.
   - `getMaxMint` debe devolver `maxMintAmount` para la dirección pasada como parámetro.
   - `getMinted` debe devolver `mintedAmount` para la dirección pasada como parámetro.

4. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Intente implementar la función `isWhitelisted` primero, ya que la mayoría de las pruebas dependen de ella._

- _Para verificar la existencia en un mapeo in Solidity, intente verificar si una propiedad tiene un valor diferente a 0._

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/14.test.ts
```
