# `05` Constructores

En el ejercicio anterior, aprendimos cómo crear un contrato inteligente que almacena datos. Sin embargo, tuvimos que configurar manualmente los valores de las variables, esto dará como resultado varias transacciones con costos asociados. En este ejercicio, aprenderemos cómo establecer los valores de las variables automáticamente cuando se implementa el contrato inteligente.

Los constructores son funciones especiales que se ejecutan cuando se implementa el contrato inteligente. Se utilizan para inicializar el estado del contrato inteligente. En este ejercicio, usaremos un constructor para establecer los valores de las variables.

```solidity
constructor(type parameter1, ...parameterN) {
    // su código de inicialización va aquí...
}
```

Ex:

```solidity
constructor(uint256 _number) {
  number = _number;
}

```

## Instrucciones

1.Cree un contrato inteligente `contracts/NumberStorage05` para almacenar dos números. El primer número debe almacenarse en una variable llamada `number1` y el segundo número debe almacenarse en una variable llamada `number2` . No cree funciones para establecer los valores de las variables.

2. Agregue un constructor que le permitirá establecer el valor de `number1` y `number2` cuando se implemente el contrato inteligente

3. El contrato mantendrá la función `getSum` que devuelve la suma de los dos números del ejercicio anterior.

## Recuerda

- _Las funciones de constructor se ejecutan cuando se implementa el contrato inteligente._

- _Las funciones de constructor se utilizan para inicializar el estado del contrato inteligente._

- _Las funciones constructoras no tienen un tipo de retorno._

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/05.test.ts
```
