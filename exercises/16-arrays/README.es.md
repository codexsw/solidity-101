# `16` Arrays (matrices)

Las matrices son un tipo especial de variable. Se utilizan para almacenar múltiples valores en una sola variable.

Para declarar una matriz, utiliza la sintaxis `type[]`. Por ejemplo

```solidity
uint256[] numbers;
```

Para inicializar una matriz, utiliza la siguiente sintaxis:

```solidity
type[] <variableName> = [<value>, <value>, ...];
```

Ex:

```solidity
uint256[] numbers = [1, 2, 3];
```

Para acceder a una matriz, utiliza la siguiente sintaxis:

```solidity
<variableName>[<index>];
```

Ex:

```solidity
numbers[0];
```

Para obtener la longitud de una matriz, utiliza la propiedad `length`. Por ejemplo

```solidity
numbers.length;
```

Para agregar un valor al final de una matriz, utiliza el método `push`. Por ejemplo:

```solidity
numbers.push(4);
```

Para eliminar un valor del final de una matriz, utiliza el método `pop`. Por ejemplo:

```solidity
numbers.pop();
```

Los bucles `for` se utilizan para iterar sobre matrices. Por ejemplo:

```solidity
for (uint256 i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}
```

_(Los bucles `for` en Solidity son muy similares a los de C++ o Java)_

¡Vamos a probarlo!

Esta vez crearemos un contrato de cola FIFO. Una cola FIFO es una cola donde el primer elemento agregado a la cola es el primer elemento eliminado de la cola (primero en entrar, primero en salir, First In, First Out).

El propósito de este contrato es almacenar una lista de direcciones y permitir que el propietario del contrato elimine la primera dirección de la cola.

## Instrucciones

1. Cree un contrato llamado `FIFOQueue` y copie el siguiente código en él:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FIFOQueue {
  address[] public queue;

  function enqueue(address _address) public {
    // su código aquí
  }

  function dequeue() public {
    // su código aquí
  }

  function length() public view returns (uint256) {
    // su código aquí
  }

  function head() public view returns (address) {
    // su código aquí
  }

  function moveToEnd() public {
    // your code here
  }
}

```

2. Implemente la función `enqueue` Esta función debería agregar una dirección al final de la cola.

3. Implemente la función `dequeue` Esta función debería eliminar la primera dirección de la cola. Para ello, deberá desplazar la matriz hacia la izquierda. Esto se puede hacer usando un bucle `for`, moviendo cada elemento hacia la izquierda una posición y luego eliminando el último elemento de la matriz usando el método `pop`.

4. Implemente la función `length` Esta función debería devolver la longitud de la cola.

5. Implemente la función `head` Esta función debería devolver la primera dirección en la cola (sin modificarla).

6. Implemente la función `moveToEnd` Esta función debería eliminar la primera dirección de la cola y agregarla al final de la cola.

7. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Implemente primero las funciones `head` y `length` , ya que la mayoría de las pruebas dependen de ellas_

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/16.test.ts
```
