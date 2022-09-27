# `10` Vistas (views)

Las vistas son funciones que no modifican el estado del contrato inteligente. Se utilizan para leer datos del contrato inteligente. Se ejecutan en una llamada y no en una transacción, por lo que no cuestan `gas`, ya que se ejecutan localmente.

Se dice que las vistas son puras (`pure`) si no leen ningún dato del contrato inteligente. Se dice que son `views` si leen datos del contrato inteligente.

Ex: View

```solidity
function getSum() public view returns (uint256) {
  return number1 + number2;
}

```

Ex: Pure

```solidity
function getNumber1() public pure returns (uint256) {
  return 1;
}

```

Las funciones `view` y `pure` se utilizan más como medida de seguridad. Se utilizan para asegurarse de que la función no modifique el estado del contrato inteligente.

## Instrucciones

1. En el contrato inteligente `CompanyStock` , agregue una función llamada `getSharePct` que devuelva el porcentaje de acciones de una dirección. (aproximación entera de la participación en acciones)

Para calcular la aproximación entera de la participación en acciones, use esta fórmula:

```solidity
(shares[address] * 100) / totalShares
```

2. Compile el código haciendo clic en el botón "Test" de arriba.

## Recuerda

- _Ejecute la prueba manualmente ejecutando en una terminal:_

```shell
npx hardhat test test/10.test.ts
```
