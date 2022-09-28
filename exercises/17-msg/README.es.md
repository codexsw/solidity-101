# `17` El objeto `msg`

El objeto `msg` es un objeto global que está disponible en todas las funciones. Contiene información sobre la llamada de función actual

Lo usamos para obtener información sobre la transacción actual, como la dirección del remitente, el valor enviado y el combustible restante.

```solidity
msg.sender;
msg.value;
msg.gas;
```

Algunas de las propiedades del objeto `msg` son de solo lectura y otras son de lectura y escritura.

- `msg.data` — los datos de llamada completos, que es un área no modificable y no persistente donde los argumentos de la función se almacenan y se comportan principalmente como memoria.
- `msg.gas` — Devuelve el gas disponible restante para una transacción actual.
- `msg.sig` — Los primeros cuatro bytes de los datos de llamada para una función que especifica la función a llamar (es decir, su identificador de función)
- `msg.value` — La cantidad de wei enviada con un mensaje a un contrato (wei es una denominación de ETH)
- `msg.sender` — la dirección de la cuenta que inició la ejecución actual. Esta es la dirección de la cuenta que envió la transacción que llamó a la función actual.

Ya hemos estado usando algunas propiedades de `msg` en otros contratos. Por ejemplo, en el contrato `Payable` usamos `msg.value` para obtener la cantidad de Ether enviada al contrato. O en el contrato de `EtherBank` usamos `msg.sender` para obtener la dirección de la cuenta que envió la transacción.

Tomaremos un descanso en este ejercicio, así que presione el botón de prueba para pasar al siguiente ejercicio.
