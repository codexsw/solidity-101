# `02` Bienvenidos a Solidity 101

Bienvenido a nuestra primera lección de Solidity 101. En esta lección aprenderemos cómo escribir nuestro primer contrato inteligente de Solidity.

Primero, introduzcamos el lenguaje de programación Solidity. Solidity es un lenguaje de programación de alto nivel para escribir contratos inteligentes. Se utiliza para implementar contratos inteligentes en varias plataformas de cadena de bloques, sobre todo Ethereum. Fue desarrollado por Gavin Wood, Christian Reitwiessner, Alex Beregszaszi, Yoichi Hirai y varios otros miembros del equipo de Ethereum en Ethereum. Está basado en el lenguaje de programación JavaScript e influenciado por C++, Python y Java.

## ¿Qué es un contrato inteligente?

Un contrato inteligente es un protocolo informático destinado a facilitar, verificar o hacer cumplir digitalmente la negociación o ejecución de un contrato. Los contratos inteligentes permiten la realización de transacciones creíbles sin terceros. Estas transacciones son rastreables e irreversibles

## ¿Qué es una cadena de bloques?

Una cadena de bloques es una lista en continuo crecimiento de registros, llamados bloques, que están vinculados y protegidos mediante criptografía. Cada bloque normalmente contiene un puntero hash como enlace a un bloque anterior, una marca de tiempo y datos de transacción. Por diseño, las cadenas de bloques son inherentemente resistentes a la modificación de los datos.

Con esta breve introducción a Solidity y los contratos inteligentes, ¡comencemos a programar!

## Codificando nuestro primer contrato inteligente

En esta lección, aprenderemos cómo escribir nuestro primer contrato inteligente de Solidity. Comenzaremos creando un nuevo archivo llamado `contracts/HelloWorld.sol` y agregaremos el siguiente código:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract HelloWorld {
  function hello() public pure returns (string memory) {
    return "Hello World!";
  }
}

```

Puede copiar y pegar el código anterior en su archivo `contracts/HelloWorld.sol`.

Una vez que tenga el código anterior en su archivo `contracts/HelloWorld.sol` , puede compilarlo haciendo clic en el botón "Test" de arriba

Desglosemos el código anterior:

- La primera línea es un comentario especial que le dice al compilador para qué versión del compilador de Solidity se escribió este código.

- La palabra clave `contract` se utiliza para definir un nuevo contrato. Un contrato es una colección de funciones y datos (su estado) que reside en una dirección específica en la cadena de bloques de Ethereum.

- La palabra clave `function` se usa para definir una nueva función dentro de un contrato. Una función es una pieza de código que realiza una acción. En este caso, la función se llama `hello` y devuelve una cadena.
