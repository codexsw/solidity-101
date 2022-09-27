# `12` modificadores

Los modificadores son una forma de modificar el comportamiento de una función. Se utilizan para verificar ciertas condiciones antes de ejecutar una función. Si la condición no se cumple, la función no se ejecutará.

¿Por qué querríamos hacer esto? Bueno, podemos usar modificadores para asegurarnos de que solo el propietario de un contrato inteligente pueda ejecutar ciertas funciones. Este es un patrón muy común en los contratos inteligentes. O para evitar que una función se ejecute más de una vez y provoque un ataque de reingreso (re-entrancy attack)

Sintaxis de un modificador:

```solidity
modifier <name>() {
  // declaraciones require y otro código
  _; // <-- aquí es donde se inserta el cuerpo de la función modificada
  // otro código
}
```

## Ataque de reentrada (Re-entrancy attack)

La reentrada es una vulnerabilidad que ocurre cuando un contrato se llama a sí mismo u otro contrato lo devuelve antes de que finalice la llamada original. Esto se puede usar para robar Ether de un contrato.

Si no tuvo cuidado, el contrato de su ejercicio anterior podría ser vulnerable a la reingreso. Veamos cómo podemos arreglarlo con un modificador.

Agregue esto a su contrato de `EtherBank`:

```solidity
bool private locked = false;

modifier reentrancyGuard() {
  require(!locked, "re-entrancy");
  locked = true;
  _;
  locked = false;
}
```

Con esto en su lugar, ahora podemos agregar un modificador `reentrancyGuard` a la función `withdraw`:

```solidity
function withdraw(uint256 amount) public reentrancyGuard {
  // su código de withdraw.
}

```

Vamos a crear un modificador que solo permitirá al propietario del contrato ejecutar una función particular.

## Instrucciones

1. En el contrato de `EtherBank` , cree un modificador llamado `onlyOwner` que comprobará si `msg.sender` es el propietario del contrato. Si no es así, la función debería revertirse con **"not-owner"** . El propietario del contrato debe almacenarse en una variable `owner` de tipo dirección en el constructor

1. Para almacenar la cuenta del implementador del contrato como `owner` , necesitará un `constructor`

```solidity
constructor() {
  owner = msg.sender;
}

```

3. Cree una función llamada `ownWidthdraw` que permitirá al propietario del contrato retirar Ether del contrato. Esta función debe usar el modificador `onlyOwner`. Lo que significa que solo el propietario del contrato puede ejecutar esta función

```solidity
function ownerWithdraw(uint256 amount) public onlyOwner {
  withdraw(amount);
}

```

4. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/12.test.ts
```
