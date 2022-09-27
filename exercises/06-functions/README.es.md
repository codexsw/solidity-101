# `06` Funciones

En este ejercicio aprenderá a crear funciones.

Las funciones son la única forma de modificar datos en un contrato inteligente. Además, las funciones le permiten recuperar datos de un contrato inteligente.

Las funciones pueden recibir parámetros y devolver valores.

Las funciones también tienen acceso a las variables globales `msg.sender` y `msg.value`. `msg.sender` es la dirección de la cuenta que llamó a la función. `msg.value` es la cantidad de Ether enviada al contrato inteligente cuando se llama a la función. (Si se llama a una función sin Ether, `msg.value` será 0)

Si una función modifica datos en el contrato inteligente, se denomina **transaction** . Si una función solo recupera datos del contrato inteligente, se denomina llamada **call**.

Las transacciones se ejecutan cuando se envían a la cadena de bloques. El cliente Ethereum ejecuta las **call** localmente y no requieren Ether.

```solidity
function <name> (<parameters>) <visibility> [modifiers] <payable> <returns> {
  // su código va aquí...
}
```

Ejemplo:

```solidity
function getSum(uint256 number1, uint256 number2)
  public
  view
  returns (uint256)
{
  return number1 + number2;
}

```

```solidity
address private owner;

function setOwner(address _owner) public {
  owner = _owner;
}
```

`getSum` es una función que recibe dos números como parámetros, los suma y devuelve el resultado. `setOwner` es una función que recibe una dirección como parámetro y se la asigna a la variable propietario `owner`.

## Instrucciones

1. Cree un contrato inteligente llamado `OwnableContract`.

2. Agregue una variable pública llamada `owner` de tipo `address`.

3. Establezca el propietario del contrato inteligente en la dirección que implementó el contrato inteligente.

4. Agregue una función llamada `setOwner` que recibe una dirección como parámetro y se la asigna a la variable `owner`.

5. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Utilice la palabra clave `public` para que las variables y la función sean accesibles desde fuera del contrato inteligente._

- _Utilice el tipo de datos `address` para almacenar direcciones._

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/06.test.ts
```
